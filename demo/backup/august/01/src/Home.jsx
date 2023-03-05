
import Headline1 from './Components/Headline1';
import Banner from './Components/Banner';


export default function Home() {
    return(
          <>
          <div className="home-page-main">
              <div className="banner-part">
              <Banner/>
              <div className="banner-content">
                  <h1>Travel And Adventures </h1>
                  <h4>Where Would You Like To Go</h4>
              </div>
              </div>
          
          <Headline1/> 

          <div className="about-info">
              
             <h1>home</h1>
              
          </div>
          </div>        
        </>
    )
}
