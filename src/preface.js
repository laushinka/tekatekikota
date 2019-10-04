import React from "react";
import prefaceImg from "./Asset_7.png";

export default class Preface extends React.Component {
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
            <div className="preface">
                <img id="imgPreface" src={prefaceImg} />
                <p id="textPreface">
                    I had a grandfather who passed away a year ago. <br />
                    <br />
                    Before he died, he asked me to find our family secret that
                    hidden for a long time in the city of Batavia. <br />
                    <br />I lived in a different island all this time. This is
                    my first time to step my foot on this island, particularly
                    in this lively city. <br />
                    <br />I know nothing about this place. <br />
                    <br />
                    Will you help me?
                </p>
                <a href="./game" id="introBtn">
                    Next >>>
                </a>
            </div>
        );
    }
}
