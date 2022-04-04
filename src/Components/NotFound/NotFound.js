import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <h1 className='header-title'>
                    404 Not Found
                </h1>
            </header>

            <div className='content'>
                <img src="" className='image' alt="" />
                <article>
                    <h2 className='info-title'>I have a bad news for you</h2>
                    <p className='info-description'>
                        The page you are looking for is temporarily unavailable.
                    </p>
                    <Link to='/'>
                        Back to Homepage
                    </Link>
                </article>
            </div>

        </div>
    );
};

export default NotFound;