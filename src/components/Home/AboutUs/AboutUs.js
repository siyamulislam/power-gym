import React from 'react';
import './AboutUs.css'
import aboutImg from '../../../images/aboutUsLeft.jpg'

const AboutUs = () => {
    return (
        <section className='aboutUS'>
            <div className='row'>
                <div className="col-md-6">
                <img className='img-fluid' src={aboutImg} alt="" />
                </div>
                <div className="col-md-6">
                <h1 className=''>About Us</h1>
                <h2>WE ARE HERE TO DREAM! <br></br> <span>OUR TEAM IS HERE SURVE YOU</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo assumenda eos voluptas. Quo porro expedita consequuntur hic, necessitatibus rerum quod dolores incidunt, odio doloribus accusantium.</p>
                </div>
                
            </div>
        </section>
    );
};

export default AboutUs;