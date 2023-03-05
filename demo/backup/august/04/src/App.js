

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {

  return (
   <Router>
     <Header/>
  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
  </Router>
  );
}




export default App;

