import React from 'react';
import NavSection from '../NavSection/NavSection';
import './Header2.css'

const Header2 = (props) => {
    return (
        <section className='header2'>
            <NavSection></NavSection>
            <div className="header2body">
                <h1>{props.heading}</h1>
            </div>
        </section>
    );
};

export default Header2;
