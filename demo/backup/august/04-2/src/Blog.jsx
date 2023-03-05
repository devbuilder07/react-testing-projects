import InnerBanner from './Components/InnerBanner';
import {Link} from "react-router-dom";


export default function Blog() {
    return(
          <>
          <div className="blog-page-main">
          <div className="innerbanner-main">
            {/* <InnerBanner/> */}
            <div className="banner-info">
                    <h4>Blog</h4>
                    <ul>
                    <li className="active"><Link to="/" className="text-link">Home</Link></li>
                    <li>/</li>
                     <li><Link to="/blog" className="text-link">Blog</Link> </li>
                    </ul>
                </div>
            </div>
          </div>         
        </>
    )
}
