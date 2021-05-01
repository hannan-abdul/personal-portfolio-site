import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <img src="" alt="Logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;