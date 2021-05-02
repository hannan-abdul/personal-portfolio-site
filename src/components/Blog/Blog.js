import React from 'react';
import blog1 from '../../images/firebase.png';
import blog2 from '../../images/javascript.jpg';
import blog3 from '../../images/react-router.jpg';
import BlogDetails from './BlogDetails';

const blogDetail =[
    {
        img: blog1,
        title: 'Firebase SDKs Initialize',
        description: 'How you add Firebase SDKs to your Web app depends on whether you ve chosen to use Firebase Hosting for your app, what tooling you re using with'
    },
    {
        img: blog2,
        title: 'Quick Start to JavaScript',
        description: 'This website is for worldwide food hunter. Here anyone can find their delicious food. It is super easy to search any food within a moment'
    },
    {
        img: blog3,
        title: 'React Router Installation',
        description: 'This is the Barcelona team player selection website, Here anyone can know what is players yearly salary and all personal information.'
    }
]

const Blog = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className="w-75 row text-center mt-5">
            <h1>My Blog</h1>
                {
                    blogDetail.map(detail=> <BlogDetails detail={detail}></BlogDetails>)
                }
            </div>
        </div>
    );
};

export default Blog;