
import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import HomePage from "./pages/home";
import Services from './pages/services'
import Header from './components/Header'
import Contact from "./components/ContactPart/contact";
import Work from "./components/workpart/work";
import Company from "./components/company/company";
import "./assets/styles/header.scss"
import './index.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./components/HomePart/Footer";
ReactDOM.render(
  <div>
    <BrowserRouter>
        <div className="main-wrap d-flex">
            <Header />
            <Switch>
              <Route exact path="/" >
                <App />
              </Route>
              <Route exact path="/home">
                <App />
              </Route>
              <Route exact path="/services" >
                <Services />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/contact">
                  <Contact />
              </Route>
              <Route  exact path="/about">
                  <Company />
              </Route>

            </Switch>
            <Footer />
          </div> 
    </BrowserRouter>
  </div>
    ,
  document.getElementById("root")
);

registerServiceWorker();