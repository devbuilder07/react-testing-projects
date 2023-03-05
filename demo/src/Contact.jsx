import InnerBanner from './Components/InnerBanner';
import {Link} from "react-router-dom";



export default function Contact() {
    return(
          <>
          <div className="contact-page-main">
          <div className="innerbanner-main">
            <InnerBanner/>
            <div className="banner-info">
                    <h4>Contact Us</h4>
                    <ul>
                    <li className="active"><Link to="/" className="text-link">Home</Link></li>
                    <li>/</li>
                     <li>Contact Us</li>
                    </ul>
                </div>
            </div>


          <div className="contact-area">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-lg-8">
                          <form action="">

                           <div className="form-area">
                               <h4>Send Us a Message</h4>
                               <div className="row">
                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="text" className="form-control" placeholder="First Name" />
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="text" className="form-control" placeholder="Last Name" />
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="text" className="form-control" placeholder="Phone No" />
                                       </div>
                                   </div>

                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="Email" className="form-control" placeholder="Email Id" />
                                       </div>
                                   </div>
                                   <div className="col-md-12">
                                       <div className="form-group">
                                           <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Write Something here..."></textarea>
                                       </div>
                                   </div>
                               </div>
                           <div className="button-area">
                               <a href="#" className="cstmbtn">Submit</a>
                           </div>
                           </div>
                          </form>
                      </div>
                      <div className="col-md-6 col-lg-4">
                      <div class="our-address-info">
<h3>Contact Us</h3>
<p>Lorem ipsum dolor sit amet,
consectetur adipisicing elit.
Accusantium alias animi blanditiis, deserunt est.</p>
<ul class="add-info">
<li class="info-item">
 <ul>
<li class="icon_area"><i class="fas fa-mobile-alt"></i></li>
<li class="item_name">+000 0000 0000</li>
</ul>
</li>
<li class="info-item">
<ul>
<li class="icon_area"><i class="fas fa-fax"></i></li>
<li class="item_name">+000 0000 0000</li>
</ul>
</li>
<li class="info-item">
<ul>
<li class="icon_area"><i class="fas fa-envelope"></i></li>
<li class="item_name">travelworld@gmail.com</li>
</ul>
</li>
<li class="info-item">
<ul>
<li class="icon_area"><i class="fas fa-map-marker-alt"></i></li>
<li class="item_name">Demo Street, Near New Garden;</li>
</ul>
</li>
</ul>
<div class="media-icon">
<ul>
<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fab fa-twitter"></i></a></li>
<li><a href="#"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
</div>
                      </div>
                  </div>
                


                  
              </div>
          </div>
              

              
       
          </div>        
        </>
    )
}
