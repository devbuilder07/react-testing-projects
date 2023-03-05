import React from 'react';
import './cards.css';
import {CardsItem} from './CardsItem';

export const Cards = (props) => {
    return (
        <div className="all-cards">
            {props.cardbox.map((cardbox)=>{
                return <CardsItem cardbox={cardbox}/>
            })}
            </div>
    )
}

