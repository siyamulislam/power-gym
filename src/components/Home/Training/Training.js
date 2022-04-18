import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Training.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Training = () => {
    return (
        <section className='training'>
            <h1>TRAINING <span>PROGRAMS</span> </h1> 
            <div className='row trainingBox'>
                <div className=" col-md-6 col-sm-12 left box">
                    <h2>YOGA TRAINING SEASON <span><FontAwesomeIcon icon={faArrowRight} /></span></h2>
                </div>
                <div className="col-md-6 col-sm-12 right box">
                <h2>CARDIO TRAINING SEASON <span><FontAwesomeIcon icon={faArrowRight} /></span></h2>
                </div>
            </div>
        </section>
    );
};

export default Training;