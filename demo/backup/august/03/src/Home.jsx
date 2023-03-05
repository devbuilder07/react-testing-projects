
import Banner from './Components/Banner';
import AboutItem from './Components/AboutItem';


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
          
          <div className="about-info"> 
          <AboutItem/>
          </div>
          </div>        
        </>
    )
}
