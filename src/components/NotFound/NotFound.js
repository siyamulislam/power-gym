import React from 'react';
import { Link } from 'react-router-dom';
import NavSection from '../NavSection/NavSection';

const NotFount = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <NavSection></NavSection>
            <h1>404 not found!</h1>
            <div>
                <p>Click to route to "/oops" which isn't a registered route:</p>
                <Link to="/">Let's go back HOME </Link>
            </div>
            <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>

        </div>
    );
};

export default NotFount;