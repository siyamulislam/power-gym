import React from 'react';
import './PriceCard.css';
import bImg from '../../../images/feature2.jpg';
import { Link } from 'react-router-dom';

const PriceCard = (props) => {
    const{duration,name,price,feature,img}=props.plan; 
    var cardStyle= {
        backgroundImage: `linear-gradient(rgba(31, 31, 46, 0.699),rgba(29, 29, 43, 0.5)),url(${img})`,
        }
    return (
        <div className='priceCard' style={cardStyle}>
            <div className='priceCardBody'>
                <h6>{duration}</h6>
                <h4>{name}</h4>
                <h1>${price}</h1>
                <ul>
                    {feature.map(item=><li key={item}>{item}</li>)} 
                </ul>
                <button className="purchaseBtn">
                    <Link to='/price/member-ship'>purchase</Link><br />
                </button>

            </div>
        </div>
    );
};

export default PriceCard;
