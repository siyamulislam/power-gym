import React from 'react';
import { Link } from 'react-router-dom';
import './SelectedClass.css'

const SelectedClass = (props) => {
    const { title, img } = props.card;
    // console.log(props); 
    return (
        <div className='row selectedClass'>
            <div className='col-md-7 left'>
                <img src={img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a nisi, tempora magnam, quibusdam saepe quisquam deserunt modi vel, perspiciatis maxime molestiae voluptatem debitis placeat ut quaerat laudantium iure incidunt tenetur nam corporis est odio deleniti! Corrupti in saepe incidunt blanditiis aliquam, corporis esse fuga dolorem numquam earum alias quia obcaecati ipsa? Ipsa quidem autem et sapiente explicabo quae nobis consequuntur voluptate debitis vel veritatis sequi natus dolorem obcaecati eligendi voluptatem quis quaerat, laudantium architecto aliquam ipsum! Ipsam, illo fugiat.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Nesciunt porro excepturi odio repudiandae.</li>
                    <li>Nam aspernatur est neque. Enim.</li>
                    <li>Ab ad corporis alias quos?</li>
                    <li>Ipsam alias magnam reiciendis sit?</li>
                    <li>Debitis ipsa esse accusamus a.</li>
                    <li>Distinctio eaque possimus tempore ad.</li>
                    <li>Dolores inventore quibusdam ipsum laborum?</li>
                </ul>
            </div>
            <div className='col-md-5 right'>
                <h1> Class <span>Schedule</span></h1>
                <div className='schedules'>
                    <div className='schedule'>
                        <h4>Monday</h4>
                        <h6>8:00 AM - 9.00 PM</h6>
                    </div>
                    <div className='schedule'>
                        <h4>Tuesday</h4>
                        <h6>10:00 AM - 11.00 PM</h6>
                    </div>
                    <div className='schedule'>
                        <h4>Wednesday</h4>
                        <h6>6:00 AM - 7.00 PM</h6>
                    </div>
                    <div className='schedule'>
                        <h4>Thursday</h4>
                        <h6>11:00 AM - 12.00 PM</h6>
                    </div>
                </div>
                <button className="joinUsBtn">
            <Link to='/price'>JOIN US</Link><br />
          </button>

            </div>
        </div>
    );
};

export default SelectedClass;