import React from 'react';
import Footer from '../Footer/Footer';
import Header2 from '../Header2/Header2';
import PriceCard from './PriceCard/PriceCard';
import './pricing.css'
import priceBg1 from '../../images/feature1.jpg'
import priceBg2 from '../../images/feature2.jpg'
import priceBg3 from '../../images/feature3.jpg'

const Pricing = () => {
    const planList = [
        {
            pID:1,
            duration: "Billed Monthly",
            name: "Advanced Plan",
            price: 140,
            feature:["Mobile-Optimization","Best Fitness", "Free Equipment", "Lifetime Access", "Wifi Zone"],
            img: priceBg1
        },
        {
            pID:2,
            duration: "Billed Monthly",
            name: "Basic Plan",
            price: 120,
            feature:["Mobile-Optimization","Best Fitness", "Free Equipment", "Lifetime Access", "Wifi Zone"],
            img: priceBg2
        },
        {
            pID:3,
            duration: "Billed Monthly",
            name: "Beginners Plan",
            price: 90,
            feature:["Mobile-Optimization","Best Fitness", "Free Equipment", "Lifetime Access", "Wifi Zone"],
            img: priceBg3
        },
    ]
    return (
        <div className='pricing'>
            <Header2 heading={"Pricing Plans"}></Header2>
            <div className='priceTopBody'>
                <h2>Choose The Offer <span>That Suits You</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illum autem, est quae natus. Voluptates, cupiditate.</p>
            </div>
            <div className='cardBody'>
                {
                    planList.map(plan=><PriceCard key={plan.pID} plan={plan}></PriceCard>)
                } 

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;