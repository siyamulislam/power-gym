import React from 'react';
import NavSection from '../../NavSection/NavSection';
import './Header.css'

const Header = () => {
    return (
        <div className='headerMain jumbotron-fluid'>
          <NavSection></NavSection>
        </div>
    );
};

export default Header;