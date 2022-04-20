import React from 'react';
import Footer from '../Footer/Footer';
import Header2 from '../Header2/Header2'; 
import './Classes.css'

const Classes = () => {
    return (
        <div className='classes'>
            <Header2 heading={"Our Classes"}></Header2> 
            <div className='classBody  '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloribus beatae consequatur hic neque soluta tenetur vero obcaecati, optio dolores quia impedit velit corrupti modi pariatur sapiente eligendi facilis delonsequatur nulla. Veniam eligendi, praesentium consectetur nam libero, animi laboriosam reiciendis eum natus blanditiis porro dicta a!</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;