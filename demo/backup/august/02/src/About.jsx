
import Headline1 from './Components/Headline1';
import Banner from './Components/Banner';
import aboutpic2 from './Images/pic4.jpg';


export default function About() {
    return(
          <>
          <div className="home-page-main">
          <Banner/>
          <div className="about-main">
            <div className="container">
              <div className="headinfo">
              <Headline1/> 
              </div>

              <div className="row">
                <div className="col-md-7">
                <div className="info-line">
                <h3>WHO WE ARE?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tenetur suscipit deserunt, laudantium explicabo quo dolorem molestiae consequatur vitae tempore repudiandae corrupti consequuntur accusantium vero, alias asperiores voluptas dolore impedit odit non. Laborum, aliquid? Modi architecto perferendis similique ut laboriosam quibusdam maiores magni quis autem, suscipit voluptatibus rerum exercitationem praesentium?</p>
              </div>

              <div className="info-line">
                <h3>WHAT WE DO?</h3>
                  <ul>
                      <li><span><i class="fas fa-dot-circle"></i></span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quibusdam iste consequatur voluptas ab.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde.</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia quasi modi?</li>
                      <li><span><i class="fas fa-dot-circle"></i></span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt inventore harum, aliquam consequatur consequuntur.</li>
                  </ul>
              </div>
                </div>

                <div className="col-md-5">
                  <div className="pic-area">
                 <img src={aboutpic2} alt="" />
                  </div>
                </div>
              </div>
            
         
              </div>
          </div>
          </div>        
        </>
    )
}
