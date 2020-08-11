import React from "react";

class Marijn extends React.Component {

    constructor(props) {
        super(props);
        window.location.replace("https://www.youtube.com/channel/UCFEbMqIsgUiBVPCBm-uvL_Q");
        this.props.updateSelected("marijn");
    }

    render() {
        return (
            <h4 className="padded-left">Redirecting to "Amerika in 't kort.</h4>
        )
    }
}

export default Marijn;