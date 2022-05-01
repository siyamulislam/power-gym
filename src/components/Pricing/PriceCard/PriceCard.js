import React from 'react';
import './PriceCard.css';
import bImg from '../../../images/feature2.jpg';
import { Link } from 'react-router-dom';

const PriceCard = () => {
    var cardStyle= {
        backgroundImage: `linear-gradient(rgba(31, 31, 46, 0.699),rgba(29, 29, 43, 0.5)),url(${bImg})`,
        }
    return (
        <div className='priceCard' style={cardStyle}>
            <div className='priceCardBody'>
                <h6>Billed Monthly</h6>
                <h4>Advance plan</h4>
                <h1>$140</h1>
                <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Placeat, ex.</li>
                    <li>Doloque, dolum!</li>
                    <li>Cquuntur, recndae.</li>
                    <li>Possimus, quis.</li>
                </ul>
                <button className="purchaseBtn">
                    <Link to='/price'>purchase</Link><br />
                </button>

            </div>
        </div>
    );
};

export default PriceCard;
