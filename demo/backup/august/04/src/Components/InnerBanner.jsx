import React from 'react';
import BannerPic from '../Images/pic1.jpg';
import './InnerBanner.css';


export default function InnerBanner() {
    return(
          <>
            <div className="inner-banner">
                <div className="banner-pic">
                    <img src={BannerPic} alt=""/>
                </div>
            </div>
        </>
    )
}
