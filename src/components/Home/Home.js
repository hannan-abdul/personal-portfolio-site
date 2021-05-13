import React from 'react';
import './Home.css';
import profile from '../../images/profile-picture.png';
import HomeProject from './HomeProject';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
            <div className="row d-flex align-items-center left-details">
                <div className="col-md-6 p-5">
                    <h1>I'm Abdul Hannan</h1>
                    <h5>FRONT-END DEVELOPER</h5>
                    <p>I always like to learn about new technologies. I also an enthusiast of ReactJS and JavaScript. Software I use to create web app JavaScript, React JS, jQuery. For the backend I use MongoDB. I also familiar with Angular JS, React Native, PHP, and MySQL database.</p>
                    <a className="btn btn-custom btn-yellow" href="https://drive.google.com/uc?id=1NR6_Kbryxnv2UoN5YYCconV7873aTlnX&export=download">DOWNLOAD CV</a>
                    <Link className="btn btn-custom" to="/contact">HIRE ME</Link>
                </div>
                <div className="col-md-6 banner-fix">
                    <img src={profile} alt="banner" className="img-fluid banner-img" />
                </div>
            </div>
        </div>
        <HomeProject></HomeProject>
        </div>
    );
};

export default Home;