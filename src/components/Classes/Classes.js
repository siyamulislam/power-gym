import React from 'react';
import Footer from '../Footer/Footer';
import Header2 from '../Header2/Header2'; 
import './Classes.css'
import class1 from '../../images/class1.png'
import ClassCard from './ClassCard/ClassCard';

const Classes = () => {
    const classDB=[
        {title:"Psycho Training",   img:class1},
        {title:"Self Defence",      img:class1},
        {title:"Advanced Gym",      img:class1},
        {title:"Cardio Training",   img:class1},
        {title:"Psycho Training",   img:class1},
        {title:"Strength Training", img:class1},

    ]
    return (
        <div className='classes'>
            <Header2 heading={"Our Classes"}></Header2> 
            <div className='classBody '>
                {
                classDB.map(card=>  <ClassCard card={card}></ClassCard> )
                }
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;