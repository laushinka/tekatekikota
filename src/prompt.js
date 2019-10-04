import React from "react";

export default class Prompt extends React.Component {
    render() {
        return (
            <div>
                <div className="promptHeader">
                    <h2>{this.props.step} of 18</h2>
                </div>
                <div className="promptBody">
                    <p>{this.props.instructions}</p>
                </div>
            </div>
        );
    }
}
