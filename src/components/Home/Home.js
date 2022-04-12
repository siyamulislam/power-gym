import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Feature from './Feature/Feature';
import Header from './Header/Header';

const Home = () => {
    return (
        <div> 
          <Header></Header>
          <Feature></Feature>
          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;