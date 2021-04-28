import React from "react";

class CardTitle extends React.Component {

    render() {
        return (
            <span className="card-title">{this.props.children}</span>
        );
    }
}

export default CardTitle;