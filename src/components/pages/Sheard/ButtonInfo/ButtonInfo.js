import React from 'react';

const ButtonInfo = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default ButtonInfo;