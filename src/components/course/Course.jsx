import React from 'react';
import PropTypes from 'prop-types';

import { FaDollarSign } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import Toast from '../toast/toast';

const Course =({course, handleSelectedCourse})=>{
    //console.log(course);
    const {course_name, course_details,price,credit_hour,course_img}=course;
    return (
        <div className="flex justify-center items-center">
            <div className='bg-white rounded-xl p-4 space-y-2 max-w-96'>
            <figure className='pb-4'>
                <img src={course_img} alt="" className='w-full'/>
            </figure>
            <h3 className='text-lg font-semibold text-[#1C1B1B]'>{course_name}</h3>
            <p className='text-sm text-[#1c1b1b] text-opacity-60'>{course_details}</p>
            <div className="grid grid-cols-2">
                <div className="flex flex-row gap-2 items-center">
                <FaDollarSign />
                <h4 className='text-[#1C1B1B] text-opacity-60'>Price: {price}</h4>
                </div>
                <div className="flex flex-row gap-2 items-center">
                <GoBook />
                <h4 className='text-[#1C1B1B] text-opacity-60'>Credit: {credit_hour} hr</h4>
                </div>
            </div>
            <button 
            className='text-center text-lg font-semibold text-white bg-[#2F80ED] w-full p-2 rounded-xl'
            onClick={()=>{
                let cr=0;
                cr+=parseInt(course.credit_hour);
                if (cr>20) {
                    <Toast></Toast>
                }
                else{
                    handleSelectedCourse(course, course.id)
                }
            }}
            >Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleSelectedCourse: PropTypes.func,
};

export default Course;