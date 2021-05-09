import React from 'react';
import './ProjectsDetail.css';

const ProjectsDetail = (props) => {
    const { title, description, img, tech, github, live } = props.detail;
    return (
        <div className="card mt-5">
            <div className="row align-items-center g-0">
                <div className="col-md-5">
                    <img style={{ width: '80%' }} src={img} alt="" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p><strong>ABOUT:</strong> {description}</p>
                        <p><strong>TECH USED:</strong> {tech}</p>
                    </div>
                    <a className="btn btn-custom btn-yellow" href={github} target="_blank">GITHUB LINK</a>
                    <a className="btn btn-custom" href={live} target="_blank">LIVE LINK</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail;