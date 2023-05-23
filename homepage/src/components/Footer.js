import React from "react";
import github_logo from "../assets/media/github_logo.png";
import reacjs_logo from "../assets/media/reacjs_logo.png";
import nginx_logo from "../assets/media/nginx_logo.png";

function Footer() {
    return (
        <footer>
            <a href="https://github.com/aanorlondo/shared-clipboard" target="_blank" rel="noopener noreferrer">
                <img src={github_logo} alt="GitHub Logo" id="github-logo" />
            </a>
            <p class="copy">&copy; 2023 Khaled Khebbeb. All rights reserved.</p>
            <p>
                <img src={reacjs_logo} alt="React.Js" id="react-logo" />
            </p>
            <p>
                <img src={nginx_logo} alt="Nginx" id="nginx-logo" />
            </p>
        </footer>
    );
}

export default Footer;