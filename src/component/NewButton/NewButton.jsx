import React from 'react';
import './NewButton.css'

const NewButton = ({restart, children}) => {
    return (
        <button onClick={restart} className='new-button'>
            {children}
        </button>
    );
};

export default NewButton;