
import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import HomePage from "./pages/home";
import Services from './pages/services'
import Header from './components/Header'
import './index.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
        <div className="main-wrap d-flex">
            <Header />
            <Switch>
              <Route exact path="/" >
                <App />
              </Route>
              <Route exact path="/services" >
                <Services />
              </Route>
            </Switch>
          </div> 
    </BrowserRouter>
    ,
  document.getElementById("root")
);

registerServiceWorker();