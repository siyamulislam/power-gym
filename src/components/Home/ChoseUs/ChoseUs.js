import React from 'react';
import './ChoseUs.css'
const ChoseUs = () => {
    return (
       <section className='chooseUs'>
           <h1>WHY <span>CHOOSE US</span></h1>
            <div className='row chooseBox'>
                <div className="col-xl-4 col-md-6 col-sm-12 box">1</div>
                <div className="col-xl-4 col-md-6 col-sm-12 box">2</div>            
                <div className="col-xl-4 col-md-6 col-sm-12 box">3</div>            
            </div>
       </section>
    );
};

export default ChoseUs;