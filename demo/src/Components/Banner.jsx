import React from 'react';
import BannerPic from '../Images/banner-2.jpg';
import './banner.css';

export default function Banner() {
    return(
          <>
            <div className="banner-main">
                <div className="banner-pic">
                    <img src={BannerPic} alt=""/>
                </div>
            </div>
        </>
    )
}
