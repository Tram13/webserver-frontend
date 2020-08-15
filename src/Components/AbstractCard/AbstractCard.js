import React from "react";

class AbstractCard extends React.Component {

    render() {
        return (
            <div className="section">
                <div className="row container center">
                    <div className="col s12 m12">
                        <div className="card">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbstractCard;