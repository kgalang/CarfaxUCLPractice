import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2018 CARFAX, Inc.</p>
            <nav className="footer-links">
                <a href="https://www.carfax.com/company/legal-disclaimer">Terms of Use </a>|
                <a href="https://www.carfax.com/company/privacy-statement"> Privacy Policy </a>|
                <a href="https://www.carfax.com/company/ad-choices"> AdChoices </a>|
                <a href="https://support.carfax.com/"> Help</a>
            </nav>
        </footer>
    );
}

export default Footer;