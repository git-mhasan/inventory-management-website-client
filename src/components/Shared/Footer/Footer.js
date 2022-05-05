import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container-full'>
            <div className='footer-container'>
                <div>
                    <div className='footer-header'> <b> About Us</b> </div>
                    <div>
                        <p>Vision</p>
                        <p>Mission</p>
                        <p>Achievement</p>
                    </div>
                </div>
                <div>
                    <div className='footer-header'><b>Services</b></div>
                    <div>
                        <p>Sales</p>
                        <p>Repair</p>
                        <p>Replace</p>
                        <p>Refurbished</p>
                    </div>
                </div>
                <div>
                    <div className='footer-header'><b>Contact Us</b></div>
                    <div>
                        <p>Uttara</p>
                        <p>Banani</p>
                        <p>Kalabagan</p>
                        <p>Badda</p>
                    </div>
                </div>
                <div>
                    <div className='footer-header'><b>Social</b></div>
                    <div>
                        <p>facebook</p>
                        <p>Instagram</p>
                        <p>twitter</p>
                        <p>Youtube</p>
                    </div>
                </div>

            </div>
            <div><p> Copyright©2022</p></div>
        </div>
    );
};

export default Footer;