
import Banner from './Components/Banner';
import AboutItem from './Components/AboutItem';
import { Cards } from "./Components/Cards";

export default function Home() {


    let cardbox = [

        {
          sno:1,
          title:"Hill Station",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 1",
          pic: require("./Images/pic8.jpg").default ,
        },
      
        {
          sno:2,
          title:" Waterfall Adventure",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 2",
          pic: require("./Images/pic6.jpg").default ,
        },
      
        {
          sno:3,
          title:" Taj Mahal Tour",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 3",
          pic: require("./Images/pic7.jpg").default ,
        },
      
        {
          sno:4,
          title:"Forest Adventure",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 4",
          pic: require("./Images/pic5.jpg").default ,
        },
      
        {
          sno:5,
          title:" Goa Beach",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 5",
          pic: require("./Images/pic2.jpg").default ,
        },
      
        {
          sno:6,
          title:" Discover Depth of Beach",
          dcp:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, porro! 6",
          pic: require("./Images/banner-1.jpg").default ,
        },
      
      
      ]

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

          <div className="ServiceArea">
<div className="container">
            <div className="HeadArea">
            <div className="headline-1">
              <h5>Our Tour <span></span></h5>
              <h2>Select Your Tour Plan</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo expedita, eaque blanditiis tenetur autem! A veniam facere cum! Doloribus atque dolor illo praesentium molestiae ad fugiat deleniti dignissimos amet?</p>
            </div>
            </div>

            <div className="CardArea">
            <Cards cardbox={cardbox}/>
            </div>
            </div>
          </div>
          
          </div>        
        </>
    )
}
