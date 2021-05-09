import React from 'react';
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
                <a className="btn btn-custom btn-yellow" href={detail.link} target="_blank">Read More</a>
            </div>
        </div>
    );
};

export default BlogDetails;