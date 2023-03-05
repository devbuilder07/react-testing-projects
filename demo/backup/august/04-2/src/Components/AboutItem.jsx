import React from 'react';
import aboutpic from '../Images/pic5.jpg';
import Headline1 from './Headline1';
import './aboutitem.css';

export default function aboutitem() {
    return(
          <>
            <div className="about-box">
                <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-7">
                    <div className="about-info">
                     <Headline1/> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit soluta, repellendus voluptates animi aut laudantium velit aliquam unde consectetur consequuntur quas ipsa placeat, ipsam atque laborum eos nihil veniam asperiores explicabo quis nostrum, doloremque voluptas expedita. Inventore voluptatum, asperiores assumenda enim aspernatur aperiam illo possimus illum blanditiis consequuntur? Minima.</p>
                </div>
                    </div>
               
                    <div className="col-md-6 col-lg-5">
                    <div className="banner-pic">
                    <img src={aboutpic} alt=""/>
                </div>
                    </div>
                    
                </div>
              
                </div>
               
                
            </div>
        </>
    )
}
