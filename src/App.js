import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./components/page_components/details/Details.component";
import "./App.css";
import AuthorisationLandingPage from "./components/page_components/authorisation_landingpage/AuthorisationLandingPage.component";

function App() {
    return (
        <Router>
            <div>
                <div className="App">
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato&display=swap"
                        rel="stylesheet"
                    ></link>
         
                    <Route path="/" component={AuthorisationLandingPage} exact />          
                    <Route path="/detail" component={Details} exact />         
                </div>       
            </div>
     
        </Router>
    );
}

export default App;
