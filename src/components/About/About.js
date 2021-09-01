import React from 'react';
import myimage from '../../images/pic-1.png';
import './About.css'
import Skills from './Skills';

const About = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <img src={myimage} alt="" />
                </div>
                <div className="col-md-6 text-start about-detail">
                    <h1>Let's Introduce About Myself</h1>
                    <p>I am Abdul Hannan known as a Front-End Webapp Developer. I always like to learn about new technologies. I am also an enthusiast of ReactJS, JavaScript, CSS3, SASS, and WordPress.
                        Recently I am working as a freelancer Front-End Web Developer in the international market and local markets. Now I am looking forward to turning my lifestyle into a full-time Front-End Developer in a reputed company.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Name: </strong>Abdul Hannan</p>
                            <p><strong>Email: </strong>abdul.webapps@gmail.com</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Phone: </strong>+8801681505522</p>
                            <p><strong>Address: </strong>Chattogram, Bangladesh</p>
                            <a className="btn btn-custom btn-yellow" href="https://drive.google.com/uc?id=15Lvnzt_x98_bC7HDqr1hsOmbciv4Udbq&export=download">DOWNLOAD CV</a>
                        </div>
                    </div>
                </div>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;