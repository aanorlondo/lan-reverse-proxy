// http://macbookpro-de-khaled.lan

import React, { useContext, useEffect, useState } from 'react';
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
            const response = await fetch(`http://macbookpro-de-khaled.lan/appdetails-api/?app_id=${selected_app_id}`);
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
            <div className="app-fields">
                <h2 id="app-name-title">{isEditing ? 'Edit App Details' : appDetails.name || 'Not named yet'}</h2>
                <p className='appdetails-entry'>
                    Name:
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={editedAppDetails.name}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.name
                    )}
                </p>
                <p className='appdetails-entry'>
                    Description:
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
                </p>
                <p className='appdetails-entry'>
                    URL:
                    {isEditing ? (
                        <input
                            type="text"
                            name="url"
                            value={editedAppDetails.url}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.url
                    )}
                </p>
                <p className='appdetails-entry'>
                    Frontend:
                    {isEditing ? (
                        <input
                            type="text"
                            name="frontend_technology"
                            value={editedAppDetails.frontend_technology}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.frontend_technology
                    )}
                </p>
                <p className='appdetails-entry'>
                    Backend:
                    {isEditing ? (
                        <input
                            type="text"
                            name="backend_technology"
                            value={editedAppDetails.backend_technology}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.backend_technology
                    )}
                </p>
                <p className='appdetails-entry'>
                    Database:
                    {isEditing ? (
                        <input
                            type="text"
                            name="database_technology"
                            value={editedAppDetails.database_technology}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.database_technology
                    )}
                </p>
                <p className='appdetails-entry'>
                    Author:
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
                </p>
                <p className='appdetails-entry'>
                    Github:
                    {isEditing ? (
                        <input
                            type="text"
                            name="github_url"
                            value={editedAppDetails.github_url}
                            onChange={handleInputChange}
                        />
                    ) : (
                        appDetails.github_url
                    )}
                </p>
                <div className='buttons-div'>
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
