import React from 'react';

export const ServiceCard = ({sercard}) => {
    return (
        <>
            <div className="SerCardBox">
                <div className="IconArea">
                    <h4>{sercard.sno}</h4>
                </div>
                <div className="CardInfo">
                    <h4>{sercard.title}</h4>
                    <p>{sercard.dcp}</p>
                </div>
                </div>
                
            
        </>
    )
}
