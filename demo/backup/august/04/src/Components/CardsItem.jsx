import React from 'react';

export const CardsItem = ({cardbox}) => {
    return (
           
            <div className="card-content">
            <div className="pic-area">
                <img src={cardbox.pic} alt="" />
                </div>
            <div className="card-info">
            <h4>{cardbox.title}</h4>
            <p>{cardbox.dcp}</p>
            <button className="cstmbtn">Read More</button>
            </div>
            </div>
        
       
            
    )
}