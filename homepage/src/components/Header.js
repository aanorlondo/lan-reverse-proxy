import React from 'react';
import { Link } from 'react-router-dom';
import header_logo from '../assets/media/header/header_logo.png'
import './Header.css';

function Header() {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <header>
            <Link to="#" className='link' onClick={reloadPage}>
                <div id='header-content'>
                    <h2>Welcome to Khaled's Local Server</h2>
                    <img id='header-logo' src={header_logo} />
                </div>
            </Link>
        </header>
    );
}

export default Header;