import React from 'react';

const LetterBoard = () => {
    return (
        <div className='letter-board'>
            {Array.from('ABCDEFGH').map((index) => <div key={index} className='cell'>{index}</div>)}
        </div>
    );
};

export default LetterBoard;