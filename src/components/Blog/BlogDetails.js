import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const BlogDetails = ({detail}) => {
    return (
        <div className="col-md-4 my-5 main-card-body" >
            <img className="work-img" style={{ width: '100%', height: '30%' }} src={detail.img} alt="" />
            <div className="card-body-home">
                <div className='card-inner-detail'>
                    <h2>{detail.title}</h2>
                    <p><strong>ABOUT:</strong> {detail.description}</p>
                </div>
                <Link className="mb-5 btn btn-custom btn-yellow" to="/">READ MORE</Link>
            </div>
        </div>
    );
};

export default BlogDetails;