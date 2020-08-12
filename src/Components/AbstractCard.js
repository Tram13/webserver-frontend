import React from "react";

class AbstractCard extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.props.content;
    }

    render() {
        return (
            <div className="section">
                <div className="row container center">
                    <div className="col s12 m12">
                        <div className="card">
                            {this.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbstractCard;