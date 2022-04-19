import React from 'react';
import './ChoseUs.css'
import choose1 from './../../../images/choose1.png'
import choose2 from './../../../images/choose2.png'
import choose3 from './../../../images/choose3.png'
const ChoseUs = () => {
    return (
        <section className='chooseUs'>
            <h1>WHY <span>CHOOSE US</span></h1>
            <div className="chooseBox">
                <div className='row '>
                    <div className="col-xl-4 col-md-6 col-sm-12 box">
                        <div className="card">
                            <div className="cardElements">
                                <img src={choose1} alt="" />
                                <h2>FREE FITNESS TRAINING</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto quo voluptatibus modi saepe amet repellat!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 box">
                        <div className="card">
                            <div className="cardElements">
                                <img src={choose2} alt="" />
                                <h2>TONS OF CARDIO AND STRENGTH</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto quo voluptatibus modi saepe amet repellat!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 box">
                        <div className="card">
                            <div className="cardElements">
                                <img src={choose3} alt="" />
                                <h2>NO COMMITMENT MEMBERSHIPS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto quo voluptatibus modi saepe amet repellat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ChoseUs;