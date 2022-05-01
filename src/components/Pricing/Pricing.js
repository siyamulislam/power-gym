import React from 'react';
import Footer from '../Footer/Footer';
import Header2 from '../Header2/Header2';
import './pricing.css'

const Pricing = () => {
    return (
        <div className='pricing'>
             <Header2 heading={ "Pricing Plans" }></Header2>
            <div  className='priceTopBody'>
                <h2>Choose The Offer <span>That Suits You</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illum autem, est quae natus. Voluptates, cupiditate.</p>
            </div>
            <div className='cardBody'>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;