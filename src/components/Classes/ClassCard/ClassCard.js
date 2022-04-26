import React from 'react';
import './ClassCard.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClassCard = (props) => {
    return (
        <div className='cardBox'>
            <div className='upperContent'>
                <img src={props.card.img} alt="" />
            </div>
            <div className="lowerContent">
                <h3
                 onClick={
                  ()=>{  props.selected(props.card)}
                 }
                 
                 
                 >{props.card.title} <span><FontAwesomeIcon icon={faArrowRight} /></span></h3>
            </div>
        </div>
    );
};

export default ClassCard;