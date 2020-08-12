import React from "react";
import M from "materialize-css";
import LoadingAnimation from "../LoadingAnimation";

class Arnoud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("arnoud");
    }

    componentDidMount() {
        const url = this.props.api["arnoud"];
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
        const arnoud_kijk = <img className="materialboxed responsive-img center" width="650" src={this.state.data["arnoud_kijk"]}
                              alt="Arnoud kijkt in de verte" data-caption="Arnoud is badass."/>;
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className="card-content">
                    <span className="card-title">Arnoud is een chad.</span>
                    {arnoud_kijk}
                </div>
            )
        }
    }
}

export default Arnoud;