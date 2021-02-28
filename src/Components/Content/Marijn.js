import React from "react";
import AbstractCard from "../AbstractCard/AbstractCard";
import CardTitle from "../AbstractCard/CardTitle";

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
                    <CardTitle>Marijn's YouTube Channel</CardTitle>
                    <p>Open Marijn's new YouTube channel: "Amerika in 't kort.</p>
                    <div className="card-action">
                        <a href={this.link} rel="noopener noreferrer" target="_blank">
                            <i className="material-icons right">
                                open_in_new
                            </i>
                            Go to YouTube
                        </a>
                    </div>
                </div>
            </AbstractCard>
        );
    }
}

export default Marijn;