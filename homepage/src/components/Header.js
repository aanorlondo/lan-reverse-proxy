import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import header_logo from '../assets/media/header/header_logo.png'
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showEditProfileForm, setShowEditProfileForm] = useState(false);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [signupForm, setSignupForm] = useState({ username: '', password: '' });
    const [editProfileForm, setEditProfileForm] = useState({ password: '' });

    const authServer = process.env.REACT_APP_AUTH_SERVER;

    const reloadPage = () => {
        window.location.reload();
    }
    const checkLoginStatus = () => {
        const jwt = Cookies.get('jwt');
        setIsLoggedIn(!!jwt);
    };

    const showLogin = () => {
        setShowLoginForm(true);
        setShowSignupForm(false);
        setShowEditProfileForm(false);
    };

    const showSignup = () => {
        setShowSignupForm(true);
        setShowLoginForm(false);
        setShowEditProfileForm(false);
    };

    const signOut = () => {
        Cookies.remove('jwt');
        setIsLoggedIn(false);
        setShowLoginForm(false);
        setShowSignupForm(false);
        setShowEditProfileForm(false);
    };

    const editProfile = () => {
        setShowEditProfileForm(true);
        setShowSignupForm(false);
        setShowLoginForm(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const { username, password } = loginForm;
        if (username && password) {
            // Make the login request and handle the response
            fetch(`${authServer}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else if (response.status === 401) {
                        throw new Error('Invalid credentials.');
                    } else {
                        throw new Error('Unexpected error occurred.');
                    }
                })
                .then((data) => {
                    Cookies.set('jwt', data.token);
                    setIsLoggedIn(true);
                    setShowLoginForm(false);
                    setShowSignupForm(false);
                    setShowEditProfileForm(false);
                })
                .catch((error) => {
                    console.error('Error during login:', error);
                    window.alert('Error during login: ' + error.message);
                });
        }
    };

    const handleSignup = (event) => {
        event.preventDefault();
        const { username, password } = signupForm;
        if (username && password) {
            // Make the signup request and handle the response
            fetch(`${authServer}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else if (response.status === 409) {
                        throw new Error('User already exists.');
                    } else {
                        throw new Error('Unexpected error occurred.');
                    }
                })
                .then((data) => {
                    Cookies.set('jwt', data.token);
                    setIsLoggedIn(true);
                    setShowLoginForm(false);
                    setShowSignupForm(false);
                    setShowEditProfileForm(false);
                })
                .catch((error) => {
                    console.error('Error during signup:', error);
                    window.alert('Error during signup: ' + error.message);
                });
        }
    };

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const { password } = editProfileForm;
        if (password) {
            const jwt = Cookies.get('jwt');
            fetch(`${authServer}/user/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify({ password }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else if (response.status === 404) {
                        throw new Error('User not found.');
                    } else {
                        throw new Error('Unexpected error occurred.');
                    }
                })
                .then((data) => {
                    console.log('Profile updated successfully:', data);
                    window.alert('Profile updated successfully');
                    setShowEditProfileForm(false);
                    setShowLoginForm(false);
                    setShowSignupForm(false);
                })
                .catch((error) => {
                    console.error('Error updating profile:', error);
                    window.alert('Error updating profile: ' + error.message);
                });
        }
    };


    // Check login status on component mount
    useEffect(() => {
        checkLoginStatus();
    }, []);

    const resetLoginForm = () => {
        setLoginForm({ username: '', password: '' });
        setShowLoginForm(false);
    };

    const resetSignupForm = () => {
        setSignupForm({ username: '', password: '' });
        setShowSignupForm(false);
    };

    const resetEditProfileForm = () => {
        setEditProfileForm({ password: '' });
        setShowEditProfileForm(false);
    };

    return (
        <header>
            <div id='header-content'>
                <Link to='#' className='header-link' onClick={reloadPage}>
                    <h2>Welcome chez Khaled</h2>
                    <img id='header-logo' src={header_logo} />
                </Link>
            </div>

            {isLoggedIn ? (
                <div className='header-buttons'>
                    <button onClick={signOut}>Logout</button>
                    <button onClick={editProfile}>User</button>
                </div>
            ) : (
                <div className='header-buttons'>
                    <button onClick={showLogin}>Login</button>
                    <button onClick={showSignup}>Signup</button>
                </div>
            )}

            <div id='header-forms'>
                {showLoginForm && (
                    <form onSubmit={handleLogin} onReset={resetLoginForm}>
                        <input
                            type='text'
                            placeholder='Username'
                            value={loginForm.username}
                            onChange={(event) =>
                                setLoginForm({ ...loginForm, username: event.target.value })
                            }
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={loginForm.password}
                            onChange={(event) =>
                                setLoginForm({ ...loginForm, password: event.target.value })
                            }
                        />
                        <button type='submit'>✅</button>
                        <button type='reset'>❌</button>
                    </form>
                )}
                {showSignupForm && (
                    <form onSubmit={handleSignup} onReset={resetSignupForm}>
                        <input
                            type='text'
                            placeholder='New Username'
                            value={signupForm.username}
                            onChange={(event) =>
                                setSignupForm({ ...signupForm, username: event.target.value })
                            }
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={signupForm.password}
                            onChange={(event) =>
                                setSignupForm({ ...signupForm, password: event.target.value })
                            }
                        />
                        <button type='submit'>✅</button>
                        <button type='reset'>❌</button>
                    </form>
                )}
                {showEditProfileForm && (
                    <form onSubmit={handleUpdateProfile} onReset={resetEditProfileForm}>
                        <input
                            type='password'
                            placeholder='New Password'
                            value={editProfileForm.password}
                            onChange={(event) =>
                                setEditProfileForm({
                                    ...editProfileForm,
                                    password: event.target.value,
                                })
                            }
                        />
                        <button type='submit'>✅</button>
                        <button type='reset'>❌</button>
                    </form>
                )}
            </div>
        </header>
    );
}

export default Header;
