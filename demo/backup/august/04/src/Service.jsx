import InnerBanner from './Components/InnerBanner';
import {Link} from "react-router-dom";




export default function Service() {
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
                     <li><Link to="/service" className="text-link">Service</Link> </li>
                    </ul>
                </div>
            </div>
          </div>        
        </>
    )
}
