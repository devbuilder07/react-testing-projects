import InnerBanner from './Components/InnerBanner';
import {Link} from "react-router-dom";
import { ServiceAllCard } from "./Components/ServiceAllCard";




export default function Service() {


  let sercard = [

    {
      sno:1,
      title:"Advance Booking",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
    {
      sno:2,
      title:"Foods & Hotels",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
    {
      sno:3,
      title:"Personal Cars",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
    {
      sno:4,
      title:"Emergency Services",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
    {
      sno:5,
      title:"International Tours",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
    {
      sno:6,
      title:"Tour Guide",
      dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  
  
  ]


    return(
          <>
          <div className="service-page-main">
          
          <div className="innerbanner-main">
            <InnerBanner/>
            <div className="banner-info">
                    <h4>Our Service</h4>
                    <ul>
                    <li className="active"><Link to="/" className="text-link">Home</Link></li>
                    <li>/</li>
                     <li>Service </li>
                    </ul>
                </div>
            </div>
            <div className="serviceboxarea">
             <div className="headarea">
               <div className="container">
               <div className="headline-1">
              <h5>Our Services <span></span></h5>
              <h2>Our Best Services For You</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo expedita, eaque blanditiis tenetur autem! A veniam facere cum! Doloribus atque dolor illo praesentium molestiae ad fugiat deleniti dignissimos amet?</p>
            </div>
               </div>
             </div>
    
    <div className="container">
             <div className="ServiceMainArea">
             <ServiceAllCard sercard={sercard}/>
             </div>
             </div>
            </div>
            

           

          </div>        
        </>
    )
}
