import {Link} from "react-router-dom";
import './footer.css';
import logo1 from '../Images/logo.png';
import instagram1 from '../Images/pic1.jpg';
import instagram2 from '../Images/pic2.jpg';
import instagram3 from '../Images/pic3.jpg';
import instagram4 from '../Images/pic4.jpg';
import instagram5 from '../Images/pic1.jpg';
import instagram6 from '../Images/pic2.jpg';
import instagram7 from '../Images/pic3.jpg';
import instagram8 from '../Images/pic4.jpg';

export default function Footer() {
    return (

          <footer>
              
              <div className="footer-area">
              <div className="row">
                  <div className="col-md-6 col-lg-3">
                  <div className="footer-box">
                    <div className="logo-pic">
                     <img src={logo1} alt="" />
                    </div>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in facere atque aliquam? Dicta, itaque.</h5>
                  </div>
                  
                  </div>

                  <div className="col-md-6 col-lg-3">
                  <div className="footer-box">
                      <h4>Useful Links</h4>
                      <ul className="linkarea">
                         <li><Link to="/" className="text-link"><span><i class="fas fa-arrow-circle-right"></i></span>Home</Link>
                         </li>
                         <li><Link to="/about" className="text-link"> <span><i class="fas fa-arrow-circle-right"></i></span>About Us</Link>
                            </li>
                         <li><Link to="/service" className="text-link"> <span><i class="fas fa-arrow-circle-right"></i></span>Services</Link></li>
                         {/* <li><Link to="/blog" className="text-link"> <span><i class="fas fa-arrow-circle-right"></i></span>Blog</Link></li> */}
                         <li><Link to="/contact" className="text-link"> <span><i class="fas fa-arrow-circle-right"></i></span>Contact Us</Link></li>
                      </ul>
                  </div>


                  </div>

                  <div className="col-md-6 col-lg-3">
                  <div className="footer-box">
                      <h4>Instagram</h4>
                      <ul className="picbox">
                          <li><img src={instagram1} alt="" /></li>
                          <li><img src={instagram2} alt="" /></li>
                          <li><img src={instagram3} alt="" /></li>
                          <li><img src={instagram4} alt="" /></li>
                          <li><img src={instagram5} alt="" /></li>
                          <li><img src={instagram6} alt="" /></li>
                          <li><img src={instagram7} alt="" /></li>
                          <li><img src={instagram8} alt="" /></li>
                      </ul>
                  </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                  <div className="footer-box">
                      <h4>Address</h4>
                  <ul className="linearea">
                    <li><a href="#"><span><i class="fas fa-map-marker-alt"></i></span> Newyork, Downstate, Newtown</a></li>
                        <li><a href="#" className="call"><span><i class="fas fa-phone"></i></span> +000 1212 2222</a></li>
                        <li><a href="#"><span><i class="fas fa-envelope"></i></span> greattrip@gmail.com</a></li>
                    </ul>
                    <ul className="mediaicon">
                          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>

                  </div>
              </div>
              </div>

              <div className="copyright-area">
                  <div className="container">
                  <p>&copy; 2021 All rights reserved. Travelworld</p>
                  </div>
              </div>
          </footer> 


);
}


