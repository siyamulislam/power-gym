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
            <div className="container featureBox d-flex align-items-center">
                <div className="row">
                    <div className="col col-md-4">
                        <div className="card" >
                            <div className="card-body img-1 d-flex align-items-center">
                                <div>
                                    <img src={featureLogo2} alt="..." />
                                    <h2 className="card-title">PROGRESSION</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        Column
                    </div>
                    <div className="col col-md-4">
                        Column
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Feature;