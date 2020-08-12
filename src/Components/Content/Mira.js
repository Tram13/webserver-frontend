import React from "react";
import M from "materialize-css";
import LoadingAnimation from "../LoadingAnimation";

class Mira extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("mira");
    }

    componentDidMount() {
        const url = this.props.api["mira"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            );
                            M.AutoInit()
                        }
                    )
            )
        )
    }

    render() {
        const tekening = <img className="materialboxed responsive-img" width="650" src={this.state.data["tekening"]}
                          alt="Tekening van Mira" data-caption="Jonas heeft Mira getekend."/>;
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className="padded-left">
                        <h3>Mira is een snitch</h3>
                        {tekening}
                </div>
            )
        }
    }
}

export default Mira;