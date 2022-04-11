import React from 'react';
import NavSection from '../../NavSection/NavSection';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <section><div className='headerMain jumbotron-fluid'>
      <NavSection></NavSection>
      <div className='row header-content'>
        <div className=" col-md-6 col-sm-12 col-xs-12 left"  > 
          <h1>THE BEST FITNESS <br />STUDIO IN TOWN</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia consequatur, maxime quas ab atque quo ut perspiciatis blanditiis sapiente iure cupiditate ducimus tenetur facilis nihil dolorum tempora quia porro nobis aperiam, molestiae necessitatibus quasi accusantium velit !</p>

          {/* <button type='button' className='btn btn-warning px-5 mt-3 btn-lg text-dark '>JOIN US</button> */}
          <button className="joinUsBtn">
            <Link to='/price'>JOIN US</Link><br />
          </button>
        </div>
        <div className=" col-md-6 col-sm-12 col-xs-12 right"  >

          {/* <h1 className='header-right-bg'>+</h1> */}
          <FontAwesomeIcon className='header-right-icon' icon={faXmark} />
          <div className='row iconContainer'>
            <div className="vLine"></div>
            <div className="playBtn">  <FontAwesomeIcon  icon={faCirclePlay} color='rgba(200, 210, 214, 1)' /> </div>
            <div className="vLine"></div>
          </div>
        </div>

      </div>
    </div ></section>
  );
};

export default Header;