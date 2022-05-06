import React from 'react';
import './About.css';

const About = () => {
    return (

        <div className='about-page'>
            <div >
                <h4 style={{ color: "orange", margin: "20px" }}> Developed by:</h4>
                <p><b>Md. Mahadi Hasan</b></p>
                <p>Jr. Web Dvelopper</p>
            </div>
            <div className='about-divider'></div>
            <div>
                <h4 style={{ color: "orange", margin: "20px" }}> Contact:</h4>
                <p>1/2 Banadi, Dhaka.</p>
                <p>Ph: 0172345678</p>
                <p>email: abc@gmail.com</p>
            </div>


        </div >

    );
};

export default About;