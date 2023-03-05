
import InnerBanner from './Components/InnerBanner';
import aboutpic2 from './Images/pic5.jpg';
import {Link} from "react-router-dom";



export default function About() {
    return(
          <>
          <div className="about-page-main">
            <div className="innerbanner-main">
            <InnerBanner/>
            <div className="banner-info">
                    <h4>About Us</h4>
                    <ul>
                    <li className="active"><Link to="/" className="text-link">Home</Link></li>
                    <li>/</li>
                     <li>About Us </li>
                    </ul>
                </div>
            </div>
          <div className="about-main">
            <div className="container">
              <div className="headinfo">
              <div className="headline-1">
              <h5>About Us <span></span></h5>
              <h2>About Our Travel World</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo expedita, eaque blanditiis tenetur autem! A veniam facere cum! Doloribus atque dolor illo praesentium molestiae ad fugiat deleniti dignissimos amet?</p>
            </div> 
              </div>

              <div className="row">
                <div className="col-md-7">
                <div className="info-line">
                <h3>WHO WE ARE?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur suscipit deserunt, laudantium explicabo quo dolorem molestiae consequatur vitae tempore repudiandae corrupti consequuntur accusantium vero, alias asperiores voluptas dolore impedit odit non. Laborum, aliquid? Modi architecto perferendis similique ut laboriosam quibusdam maiores magni quis autem, suscipit voluptatibus rerum exercitationem praesentium?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta facilis debitis sequi, voluptatibus optio nam inventore earum illo ut magnam, corporis non repudiandae aperiam culpa minus quis possimus doloribus doloremque?</p>
              </div>
    
                </div>

                <div className="col-md-5">
                  <div className="pic-area">
                 <img src={aboutpic2} alt="" />
                  </div>
                </div>
              </div>

              <div className="info-line">
                <h3>WHAT WE DO?</h3>
                  <ul>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni similique eos, inventore temporibus laborum molestias quisquam officiis quo in consequuntur ipsa voluptatum voluptate adipisci? At voluptatum dicta veniam odio.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure, corrupti necessitatibus totam repudiandae architecto? Harum neque ipsum sapiente veniam vero ea velit, voluptates accusamus!</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi provident assumenda autem itaque ipsam, perspiciatis harum obcaecati cupiditate illo error nihil ut eum maiores dolor adipisci, incidunt, aspernatur aliquam officiis. Molestias a velit, non reprehenderit nostrum ullam omnis cumque quae.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae corrupti totam quam tenetur ipsa iure impedit excepturi?</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolores distinctio cupiditate praesentium, nulla molestiae fugiat veritatis provident tenetur quos alias commodi iure odit optio repellat tempore deleniti! Impedit, odit.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel obcaecati eum fugiat tempora expedita id voluptas nemo sint quam autem optio excepturi, eveniet provident omnis.</li>
                  </ul>
              </div>
            


            
         
              </div>
          </div>
          </div>        
        </>
    )
}
