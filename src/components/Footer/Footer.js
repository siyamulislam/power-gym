import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby,  } from '@fortawesome/free-solid-svg-icons';
import { faYoutube,faFacebookF,faInstagram,faTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className='footer'>
            <div className='footerBox'>
                <div className='row '>
                    <div className="col-xl-3 col-md-12 col-sm-12 ">
                        <h3>POWER <span>GYM</span></h3>
                    </div>
                    <div className="col-xl-2 col-md-3 col-sm-6 ">
                        <ul>
                            <li><strong>Need Help?</strong></li>
                            <li>Help Center</li>
                            <li>Email Support</li>
                            <li>Live Chat</li>
                            <li>Gift Certificates</li>
                            <li> Send Us Feedback</li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-md-3 col-sm-6 ">
                        <ul>
                            <li><strong>Digital Resource</strong></li>
                            <li>Articles</li>
                            <li>E-books</li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-md-3 col-sm-6 ">
                        <ul>
                            <li><strong>Connect With Us</strong></li>
                            <li className='contactIcon'>
                                <FontAwesomeIcon icon={faYoutube}/> <FontAwesomeIcon icon={faFacebookF}/>  <FontAwesomeIcon icon={faInstagram}/> <FontAwesomeIcon icon={faTwitter}/>  <FontAwesomeIcon icon={faWhatsapp}/> 
                                </li>
                            <li>Forum</li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-6 ">
                    <ul>
                            <li><strong>Join Our Newsletter</strong></li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut magnam ab.</li> 
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Footer;