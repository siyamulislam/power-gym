import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import ChoseUs from './ChoseUs/ChoseUs';
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
          <ChoseUs></ChoseUs>
        </div>
    );
};

export default Home;