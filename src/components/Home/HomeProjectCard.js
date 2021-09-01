import React from 'react';
import './Home.css'

const HomeProjectCard = (props) => {
    const {img, title, description, tech, github, live} = props.detail;
    return (
        <div className="col-md-4 col-sm-6 col-12 my-5 main-card-body" >
            <img className="work-img" style={{ width: '100%', height: '30%' }} src={img} alt="" />
            <div className="card-body-home">
                <div className='card-inner-detail'>
                    <h2>{title}</h2>
                    <p><strong>ABOUT:</strong> {description}</p>
                    <p><strong>TECH USED:</strong> {tech}</p>
                </div>
                <a className="btn btn-custom btn-yellow" href={github}>GITHUB LINK</a>
                <a className="btn btn-custom" href={live}>LIVE LINK</a>
            </div>
        </div>
    );
};

export default HomeProjectCard;