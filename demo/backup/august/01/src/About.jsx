
import Headline1 from './Components/Headline1';
import Banner from './Components/Banner';
import Aboutpic from './Images/pic2.jpg';

export default function About() {
    return(
          <>
          <div className="home-page-main">
          <Banner/>
          <Headline1/> 

          <div className="about-info">
              <div className="left-area">
                  <h4>About Greattrip2</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis rem repellat repellendus molestiae laboriosam doloremque aspernatur accusamus explicabo, quam animi in nobis odio. Velit molestias ipsa pariatur tenetur numquam?</p>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur eum ut nulla sequi veritatis sit voluptatum quam quia beatae.</p>
              </div>

              <div className="pic-area">
                  <img src={Aboutpic} alt="" />
              </div>
          </div>
          </div>        
        </>
    )
}
