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
                    <p>I am Abdul Hannan known as a Front-End Webapp Developer. I always like to learn about new technologies. I also an enthusiast of ReactJS, JavaScript, CSS3, SASS and wordpress.<br/>
                    Recently I am working as a freelancer Front-End Web Developer in international market and local market. Now I am looking forward to turn my lifestyle into a full-time Front-End Developer in a reputed company.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Name: </strong>Abdul Hannan</p>
                            <p><strong>Email: </strong>abdul.hannan9229@gamil.com</p>
                            <a className="btn btn-custom btn-yellow" href="https://drive.google.com/uc?id=1NR6_Kbryxnv2UoN5YYCconV7873aTlnX&export=download">DOWNLOAD CV</a>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Phone: </strong>+8801977099229</p>
                            <p><strong>Address: </strong>Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;