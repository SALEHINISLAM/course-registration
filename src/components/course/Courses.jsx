import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

const Courses = ({handleSelectedCourse}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            
            {
                courses.map(course=><Course 
                                    key={course.id} 
                                    course={course}
                                    handleSelectedCourse={handleSelectedCourse}
                                    ></Course>)
                // courses.map(course=>console.log(course))
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelectedCourse: PropTypes.func,
};

export default Courses;