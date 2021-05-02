import React from 'react';
import project1 from '../../images/Screenshot_1.jpg';
import project2 from '../../images/Screenshot_2.jpg';
import project3 from '../../images/Screenshot_3.jpg';
import project4 from '../../images/Screenshot_5.jpg';
import project5 from '../../images/Screenshot_4.jpg';
import ProjectsDetail from './ProjectsDetail';

const details = [
    {
        img: project1,
        title: 'Ride Sharing App',
        description: 'This website is for traveler who want to travel around the city by using different types of vehicles like bike, bus, car and train.',
        tech: 'React.JS, Node.js, Firebase, Bootstrap5, React Router',
        github: 'https://github.com/hannan-abdul/reach-destination',
        live: 'https://reach-destination.web.app/'
    },
    {
        img: project2,
        title: 'Food Search',
        description: ' This website is for worldwide food hunter. Here anyone can find their delicious food. It is super easy to search just enter any food name it will represent all related food within a moment',
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
    },
    {
        img: project4,
        title: 'Fancy Slider',
        description: 'This is very intersting website to create slider with your serached images. just select 3 to 5 images then click create slide show then see the magic.',
        tech: 'JavaScript, HTML5, API, Bootstrap5',
        github: 'https://github.com/hannan-abdul/fancy-slider',
        live: 'https://hannan-abdul.github.io/fancy-slider/'
    },
    {
        img: project5,
        title: 'Player Selection',
        description: 'This website is about spanish football leagues also known as spanish soccer leagues. here you will get all spanish football teams details information and so on.',
        tech: 'React.JS, Netlify, Bootstrap5, React Router, JavaScript',
        github: 'https://github.com/hannan-abdul/spanish-soccer-league',
        live: 'https://spanish-soccer-league.netlify.app/'
    }
]

const Projects = () => {
    return (
        <div>
            <div className="d-flex justify-content-center text-center">
                <div className="w-75 row text-center mt-5">
                    <h1>My Projects</h1>
                    {
                        details.map(detail => <ProjectsDetail detail={detail}></ProjectsDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;