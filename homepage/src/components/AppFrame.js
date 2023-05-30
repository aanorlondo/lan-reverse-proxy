import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import './AppFrame.css';
import python_logo from "../assets/media/appframe/python_logo.png";
import flask_logo from "../assets/media/appframe/flask_logo.png";
import psql_logo from "../assets/media/appframe/psql_logo.png";

function AppFrame() {
    const { selected_app_id } = useContext(AppContext);
    const [appDetails, setAppDetails] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedAppDetails, setEditedAppDetails] = useState(null);

    useEffect(() => {
        if (selected_app_id) {
            fetchAppDetails();
            setIsEditing(false); // Cancel ongoing editing when the app selection changes
        } else {
            setAppDetails(null);
            setIsEditing(false);
        }
    }, [selected_app_id]);

    const fetchAppDetails = async () => {
        try {
            const response = await fetch(`/appdetails-api/?app_id=${selected_app_id}`);
            const data = await response.json();
            if (response.ok) {
                setAppDetails(data.data || {}); // Use an empty object if data is null or undefined
                setEditedAppDetails(data.data || {});
            } else {
                console.error('Failed to fetch app details:', data.message);
                setAppDetails({}); // Display empty entries
                setEditedAppDetails({});
            }
        } catch (error) {
            console.error('Error while fetching app details:', error);
            setAppDetails({}); // Display empty entries
            setEditedAppDetails({});
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const requestBody = {
                ...editedAppDetails,
                app_id: selected_app_id // Include the app_id in the request body
            };

            const response = await fetch('/appdetails-api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('App details saved successfully:', data.message);
                setIsEditing(false);
                fetchAppDetails(); // Refresh the details after saving
            } else {
                console.error('Failed to save app details:', data.message);
            }
        } catch (error) {
            console.error('Error while saving app details:', error);
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedAppDetails(appDetails); // Revert back to the original app details
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedAppDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    if (!appDetails) {
        return (
            <div id="no-app-selected">
                No app selected
            </div>
        );
    }

    return (
        <div id="app-details">
            <div id="app-fields">
                <h2 id="fields-title">{isEditing ? 'Edit App' : appDetails.name} Technical Sheet</h2>
                <table>
                    <tbody>
                        <tr>
                            <td className='table-field'>Name</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedAppDetails.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    appDetails.name || 'Not named yet'
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Description</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="description"
                                        value={editedAppDetails.description}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    appDetails.description
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>URL</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="url"
                                        value={editedAppDetails.url}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <Link to={appDetails.url} target="_blank" rel="noopener noreferrer">
                                        {appDetails.url}
                                    </Link>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Frontend</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="frontend_technology"
                                        value={editedAppDetails.frontend_technology}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <img className="front-logo" src={appDetails.frontend_technology}></img>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Backend</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="backend_technology"
                                        value={editedAppDetails.backend_technology}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <img className="back-logo" src={appDetails.backend_technology}></img>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Database</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="database_technology"
                                        value={editedAppDetails.database_technology}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <img className="database-logo" src={appDetails.database_technology}></img>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Author</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="author"
                                        value={editedAppDetails.author}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    appDetails.author
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className='table-field'>Github</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="github_url"
                                        value={editedAppDetails.github_url}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <Link to={appDetails.github_url} target="_blank" rel="noopener noreferrer">
                                        {appDetails.github_url}
                                    </Link>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons-div">
                    {isEditing ? (
                        <>
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <button onClick={handleEditClick}>Edit</button>
                    )}
                </div>
                <div id='tech-list'>
                    <p>
                        Powered by
                    </p>
                    <p>
                        <img id="python-logo" src={python_logo}></img>
                    </p>
                    <p>
                        <img id="flask-logo" src={flask_logo}></img>
                    </p>
                    <p>
                        <img id="psql-logo" src={psql_logo}></img>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AppFrame;
