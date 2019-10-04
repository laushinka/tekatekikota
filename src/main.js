import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./intro";
import ScavengerHunt from "./index";
import Preface from "./preface";
import Home from "./home";

const Main = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/intro" component={Intro} />
                <Route path="/preface" component={Preface} />
                <Route path="/game" component={ScavengerHunt} />
            </div>
        </Router>
    );
};

export default Main;
