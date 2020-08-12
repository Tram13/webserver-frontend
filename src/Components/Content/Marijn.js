import React from "react";

class Marijn extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("marijn");
        this.link = "https://www.youtube.com/channel/UCFEbMqIsgUiBVPCBm-uvL_Q";
    }

    render() {
        return (
            <div className="padded-left">
                <h4>Open Marijn's new YouTube channel: "Amerika in 't kort.</h4>
                <a href={this.link} rel="noopener noreferrer" target="_blank"
                   className="waves-effect waves-light btn-small red lighten-3"><i className="material-icons right">open_in_new</i>Go to YouTube</a>
            </div>
        );
    }
}

export default Marijn;