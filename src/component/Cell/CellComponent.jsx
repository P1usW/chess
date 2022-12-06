import React from 'react';
import '../../App.css'

const CellComponent = ({cell, selected, click}) => {

    const cellAvailable = cell.available && cell.figure ? 'cell-available' : '';
    const cellSelected = selected ? 'selected' : '';

    return (
        <div
            className={['cell', cell.color, cellSelected, cellAvailable].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className='available'/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
        </div>
    );
};

export default CellComponent;