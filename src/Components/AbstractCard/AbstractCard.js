import React from "react";

class AbstractCard extends React.Component {

    render() {
        return (
            <div className="section">
                <div className="row container center">
                    <div className="col s12 m12">
                        <div className="card">
                            {/* There shouldn't be a card-content inside this Component: it could also contain
                                things like card-image. This way we keep modularity. */}
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbstractCard;