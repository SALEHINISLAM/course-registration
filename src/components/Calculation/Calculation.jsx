import React from 'react';
import PropTypes from 'prop-types';

import Cname from './cname';
import Toast from '../toast/toast';
import { toast } from 'react-toastify';

const Calculation = ({selected , cdtHr}) => {
    let crdtHr=0;
    selected.map(course=>crdtHr+=parseInt(course.credit_hour))
    if(crdtHr>20){
        toast.error('You cannot add more than 20 credit hour')
    }
    let price=0;
    selected.map(course=>price+=course.price)
    return (
        <div className='bg-white p-4 rounded-xl w-full'>
            <h2 className='text-[#2F80ED] text-lg font-bold border-b pb-3'>Credit Hour Remaining {20-crdtHr} hr</h2>
            <h2 className='text-black text-xl font-bold py-3'>Course Name</h2>
            <ul className='list-decimal space-y-1 text-base text-[#1C1B1B] text-opacity-60 pl-4'>
                {/* course name */}
                {
                    selected.map((scourse)=><Cname key={scourse.id} course={scourse}></Cname>
                    )
                }
            </ul>
            <h3 className='text-base text-[#1C1B1B] text-opacity-80 py-3 border-b border-t'>Total Credit Hour : {crdtHr}</h3>
            <h3 className='text-base font-semibold pt-3'>Total Price : {price} USD</h3>
        </div>
    );
};

Calculation.propTypes = {
    selected: PropTypes.array,
    cdtHr: PropTypes.number,
};

export default Calculation;