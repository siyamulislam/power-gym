import React from 'react';
import './SelectedClass.css'

const SelectedClass = (props) => {
    const {title}=props.card;
    // console.log(props); 
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default SelectedClass;