import React from "react";
import AbstractCard from "../AbstractCard";

class Marijn extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("marijn");
        this.link = "https://www.youtube.com/channel/UCFEbMqIsgUiBVPCBm-uvL_Q";
    }

    render() {
        return (
            <AbstractCard>
                <div className="card-content">
                    <span className="card-title">Marijn's YouTube Channel</span>
                    <p>Open Marijn's new YouTube channel: "Amerika in 't kort.</p>
                    <div className="card-action">
                        <a href={this.link} rel="noopener noreferrer" target="_blank"><i
                            className="material-icons right">open_in_new</i>Go to YouTube</a>
                    </div>
                </div>
            </AbstractCard>
        );
    }
}

export default Marijn;