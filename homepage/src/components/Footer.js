import React from "react";
import github_logo from "../assets/media/footer/github_logo.png";
import reacjs_logo from "../assets/media/footer/reacjs_logo.png";
import nginx_logo from "../assets/media/footer/nginx_logo.png";
import '../assets/css/footer.css';

function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <a href="https://github.com/aanorlondo/LAN-reverse-proxy" target="_blank" rel="noopener noreferrer">
                    <img src={github_logo} alt="GitHub Logo" id="github-logo" />
                </a>
                <p className="copy">&copy; 2023 Khaled Khebbeb. All rights reserved.</p>
                <p>
                    <img src={reacjs_logo} alt="React.Js" id="react-logo" />
                </p>
                <p>
                    <img src={nginx_logo} alt="Nginx" id="nginx-logo" />
                </p>
            </div>
        </footer>
    );
}

export default Footer;