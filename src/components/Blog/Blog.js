import React from 'react';
import blog1 from '../../images/javascript-core-concept.jpeg';
import blog2 from '../../images/JavaScript-Basics.jpg';
import blog3 from '../../images/reactjs-beginner-guide.jpg';
import BlogDetails from './BlogDetails';

const blogDetail =[
    {
        img: blog1,
        title: 'JavaScript Fundamentals and Core Concepts',
        description: 'I can see JavaScript everywhere. From beginner to advance websites are built with JavaScript which is almost millions and millions.',
        link: 'https://shohas563.medium.com/javascript-fundamentals-and-core-concepts-d6709eff96a1'
    },
    {
        img: blog2,
        title: 'Important JavaScript Values for Beginners',
        description: 'JavaScript is the world’s most popular and widely used programming language. Basically, JavaScript used to build dynamic client-side webpages.',
        link: 'https://shohas563.medium.com/important-javascript-values-for-beginners-af6ae333f321'
    },
    {
        img: blog3,
        title: 'React JS Topics For Beginners',
        description: 'ReactJS is the most popular JavaScript library, not a JavaScript framework. This is a component-based JavaScript library that is to build single-page applications.',
        link: 'https://shohas563.medium.com/react-js-topics-for-beginners-6df8a95e5607'
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