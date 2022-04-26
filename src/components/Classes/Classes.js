import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header2 from '../Header2/Header2'; 
import './Classes.css'
import class1 from '../../images/class1.png' 
import class2 from '../../images/class2.jpg'
import class3 from '../../images/class3.jpg'
import class4 from '../../images/class4.jpg'
import class5 from '../../images/class5.jpg'
import class6 from '../../images/class6.jpg'
import ClassCard from './ClassCard/ClassCard';

const Classes = () => {
    const [isSelected, setSelected] = useState(''); 
    const classDB=[
        {title:"Psycho Training",   img:class1},
        {title:"Self Defence",      img:class2},
        {title:"Advanced Gym",      img:class3},
        {title:"Cardio Training",   img:class4},
        {title:"Psycho Training",   img:class5},
        {title:"Strength Training", img:class6},
    ]
    const selected= (card) =>{
        setSelected(card.title);
    }
    return (
        <div className='classes'>
            <Header2 heading={isSelected===''? "Our Classes": isSelected}></Header2> 
            <div className='classBody '>
                {
                classDB.map( card=>  <ClassCard key={card.img}  card={card} selected={selected}></ClassCard> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;