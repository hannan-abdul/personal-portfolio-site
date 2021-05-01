import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/Screenshot_1.jpg';
import project2 from '../../images/Screenshot_2.jpg';
import project3 from '../../images/Screenshot_3.jpg'
import HomeProjectCard from './HomeProjectCard';
import './Home.css'

const details = [
    {
        img: project1,
        title: 'Ride Sharing',
        description: 'This website is for traveler who want to travel around the city by using different types of vehicles like bike, bus, car and train.',
        tech: 'React.JS, Node.js, Firebase, Bootstrap5, React Router',
        github: 'https://github.com/hannan-abdul/reach-destination',
        live: 'https://reach-destination.web.app/'
    },
    {
        img: project2,
        title: 'Food Search',
        description: ' This website is for worldwide food hunter. Here anyone can find their delicious food. It is super easy to search any food within a moment',
        tech: 'React.JS, Node.js, Firebase, Bootstrap5, React Router',
        github: 'https://github.com/hannan-abdul/assignment-cooking-master',
        live: 'https://hannan-abdul.github.io/assignment-cooking-master/'
    },
    {
        img: project3,
        title: 'Player Selection',
        description: ' This is the Barcelona team player selection website, Here anyone can know what is players yearly salary and all personal information.',
        tech: 'React.JS, Node.js, Firebase, Bootstrap5, React Router',
        github: 'https://github.com/hannan-abdul/barcelona-team',
        live: 'https://fc-barcelona-team.netlify.app/'
    }
]

const HomeProject = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className="w-75 row text-center mt-5">
                <h1>My Latest Projects</h1>
                {
                    details.map(detail => <HomeProjectCard detail={detail}></HomeProjectCard>)
                }
                <Link className="mb-5 btn btn-custom btn-yellow" to="/projects">MORE PROJECTS</Link>
            </div>
        </div>
    );
};

export default HomeProject;