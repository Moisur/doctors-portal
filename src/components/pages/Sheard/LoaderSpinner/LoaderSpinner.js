import React from 'react';
import Spinner from '../../../../assets/gif/LoddinSpinner.gif'
const LoaderSpinner = () => {
    return (
        <div className='flex justify-center'>
            <img className='w-40' src={Spinner} alt="" />
        </div>
    );
};

export default LoaderSpinner;