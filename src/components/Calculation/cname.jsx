import React from 'react';
import PropTypes from 'prop-types';

const Cname = ({course}) => {
    return (
        <div>
            <li>{course.course_name}</li>
        </div>
    );
};

Cname.propTypes = {
    course: PropTypes.object,
};

export default Cname;