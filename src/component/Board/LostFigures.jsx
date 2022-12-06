import React from 'react';
import '../../App.css'

const LostFigures = ({title, figures}) => {
    return (
        <div className='lost'>
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figures.id}>
                    {figure.name} {figure.logo && <img src={figure.logo} alt="..."/>}
                </div>
            )}
        </div>
    );
};

export default LostFigures;