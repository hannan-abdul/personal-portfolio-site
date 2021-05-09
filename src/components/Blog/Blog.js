import React from 'react';
import blog1 from '../../images/firebase.png';
import blog2 from '../../images/JavaScript-Basics.jpg';
import blog3 from '../../images/react-router.jpg';
import BlogDetails from './BlogDetails';

const blogDetail =[
    {
        img: blog1,
        title: 'Firebase SDKs Initialize',
        description: 'How you add Firebase SDKs to your Web app depends on whether you ve chosen to use Firebase Hosting for your app, what tooling you re using with',
        link: 'https://shohas563.medium.com/important-javascript-values-for-beginners-af6ae333f321'
    },
    {
        img: blog2,
        title: 'Important JavaScript Values for Beginners',
        description: 'JavaScript is the world’s most popular and widely used programming language. Basically, JavaScript used to build dynamic client-side webpages.',
        link: 'https://shohas563.medium.com/important-javascript-values-for-beginners-af6ae333f321'
    },
    {
        img: blog3,
        title: 'React Router Installation',
        description: 'This is the Barcelona team player selection website, Here anyone can know what is players yearly salary and all personal information.',
        link: 'https://shohas563.medium.com/important-javascript-values-for-beginners-af6ae333f321'
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