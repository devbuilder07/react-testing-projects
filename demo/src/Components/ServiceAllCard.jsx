import React from 'react'
import { ServiceCard } from './ServiceCard';
import './servicecard.css';

export const ServiceAllCard = (props) => {
    return (
        <>


            {props.sercard.map((sercard)=>{
                return <ServiceCard sercard={sercard}/>
            })}


        </>
    )
}
