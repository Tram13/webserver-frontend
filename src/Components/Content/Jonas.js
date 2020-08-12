import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";

class Jonas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("jonas");
    }

    componentDidMount() {
        const url = this.props.api["jonas"];
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
        const kop1 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop1"]}
                          alt="Kop 1"/>;
        const kop2 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop2"]}
                          alt="Kop 2"/>;

        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className="card-content">
                    <span className="card-title">Jonas is een dikke sloef</span>
                    <div>
                        <table>
                            <tbody>
                            <tr className="no-border">
                                <td className="center">Jonas komt niet naar HashCode omdat hij stout was.</td>
                                <td className="center">We waren 5de* btw, take that Jonas</td>
                            </tr>
                            <tr className={"no-border"}>
                                <td>{kop1}</td>
                                <td>{kop2}</td>
                            </tr>
                            <p className="left-align">*technisch gezien correct</p>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default Jonas