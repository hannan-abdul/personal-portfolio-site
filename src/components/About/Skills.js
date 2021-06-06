import React from 'react';
import './About.css'

const Skills = () => {
    return (
        <div className="container py-5 skill-section">
            <h1 className="custom-text-color mb-5">My Skills</h1>
            <div className="row">
                <div className="col-md-5 p-5 custom-back-color">
                    <h3>Tech Skills</h3>
                    <h6><strong>Expertise: </strong> JavaScript, ES6, React-JS, React Router, Bootstrap, Material UI, SASS, API, Wordpress</h6>
                    <h6><strong>Familiar: </strong> TypeScript, MongoDB, Express, Redux, NodeJS, Firebase React-Native, UI/UX Design, Netlify, GitHub</h6>
                    <h6><strong>Tools: </strong>  VSCode, Chrome Dev Tool, Windows 10, MacOS</h6>
                </div>
                <div className="col-md-5 p-5 custom-back-color">
                    <h3>Other Skills</h3>
                    <h6>Email Outreach, SEO, Local SEO, Content Writing, Photoshop, Video Editing, Keyword Research</h6>
                </div>
            </div>
        </div>
    );
};

export default Skills;