import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Feature from './Feature/Feature';
import Header from './Header/Header';
import Training from './Training/Training';

const Home = () => {
    return (
        <div> 
          <Header></Header>
          <Feature></Feature>
          <AboutUs></AboutUs>
          <Training></Training>
        </div>
    );
};

export default Home;