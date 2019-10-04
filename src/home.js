import React from "react";
import homeImg from "./assets/tekatekikota-gif-transparent.gif";

export default class Home extends React.Component {
    constructor() {
        super();
        this.pressEnter = this.pressEnter.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keypress", this.pressEnter);
    }

    pressEnter(e) {
        if (e.which === 13) {
            window.location.replace("/game");
        }
    }

    render() {
        return (
            <div className="home">
                <a href="./intro">
                    <img src={homeImg} id="imgHome" />
                </a>
                <h1 id="textHome">tap to enter</h1>
            </div>
        );
    }
}
