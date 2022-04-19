import React from 'react';
import Footer from '../Footer/Footer';
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
          <Footer></Footer>
        </div>
    );
};

export default Home;