import React from 'react';
import './SelectedClass.css'

const SelectedClass = (props) => {
    const {title,img}=props.card;
    // console.log(props); 
    return (
        <div className='row selectedClass'>
            <div className='col-md-7 left'>
                <img src={img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo fugit doloribus ducimus, atque itaque necessitatibus eius sequi, maxime voluptatum cum praesentium voluptatibus perferendis ullam nobis est saepe fuga commodi veritatis, quos ab sit tempore laboriosam. Voluptatem sint id est consectetur maiores praesentium vel nemo aperiam, autem nostrum recusandae ad.</p>
            </div>
            <div className='col-md-5 right'>
                <h1> Class Secdule</h1>

            </div>
        </div>
    );
};

export default SelectedClass;