import React from 'react';

const IndexBoard = () => {
    return (
        <div className='index-board'>
            {Array.from('87654321').map((index) => <div key={index} className='cell'>{index}</div>)}
        </div>
    );
};

export default IndexBoard;