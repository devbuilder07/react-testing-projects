import React from 'react';
import aboutpic from '../Images/pic5.jpg';
import './aboutitem.css';

export default function aboutitem() {
    return(
          <>
            <div className="about-box">
                <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-7">
                    <div className="about-info">
                    <div className="headline-1">
              <h5>About Us <span></span></h5>
              <h2>About Our Travel World</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo expedita, eaque blanditiis tenetur autem! A veniam facere cum! Doloribus atque dolor illo praesentium molestiae ad fugiat deleniti dignissimos amet?</p>
            </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit soluta, repellendus voluptates animi aut laudantium velit aliquam unde consectetur consequuntur quas ipsa placeat, ipsam atque laborum eos nihil veniam asperiores explicabo quis nostrum, doloremque voluptas expedita. Inventore voluptatum, asperiores assumenda enim aspernatur aperiam illo possimus illum blanditiis consequuntur? Minima.</p>
                </div>
                    </div>
               
                    <div className="col-md-6 col-lg-5">
                    <div className="banner-pic">
                    <img src={aboutpic} alt="" loading="lazy"/>
                </div>
                    </div>
                    
                </div>
              
                </div>
               
                
            </div>
        </>
    )
}
