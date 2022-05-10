import React from 'react';

const HomeCardInfo = ({img,title,text,bgClass}) => {
    return (
        <div>
            <div className={`${bgClass} card card-side shadow-xl flex p-3 text-white font-medium `}>
                <figure><img className='w-12' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-normal">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCardInfo;