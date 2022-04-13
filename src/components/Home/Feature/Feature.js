import React from 'react';
import './Feature.css'
import featureLogo1 from '../../../images/fl1.png'
import featureLogo2 from '../../../images/fl2.png'
import featureLogo3 from '../../../images/fl3.png'
import group80 from '../../../images/feature2.jpg';

const Feature = () => {
    return (
        // <div classNameName='featureBox  '> 

        //    <div classNameName="featureDiv1 "></div>
        //    <div classNameName="featureDiv1 "></div>
        //    <div classNameName="featureDiv1 "></div>
        // </div>
        <section>
            <div className="featureBox">
                <div className="row">

                    <div className="col p-2">
                        <div className="card" >
                            <div className="card-body fLogo-1 d-flex align-items-center ">
                                <div>
                                    <img src={featureLogo1} alt="..." />
                                    <h2 className="card-title p-2">PROGRESSION</h2>
                                    <p className="card-text"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet consequatur eligendi, temporibus repudiandae modi?</small></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col p-2">
                        <div className="card" >
                            <div className="card-body fLogo-2 d-flex align-items-center ">
                                <div>
                                    <img src={featureLogo2} alt="..." />
                                    <h2 className="card-title p-2 text-warning">WORKOUT</h2>
                                    <p className="card-text"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet consequatur eligendi, temporibus repudiandae modi?</small></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col  p-2  ">
                        <div className="card" >
                            <div className="card-body fLogo-3 d-flex align-items-center ">
                                <div>
                                    <img src={featureLogo3} alt="..." />
                                    <h2 className="card-title p-2">NUTRITION</h2>
                                    <p className="card-text"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet consequatur eligendi, temporibus repudiandae modi?</small></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    );
};

export default Feature;