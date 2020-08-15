import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";
import AbstractCard from "../AbstractCard";
import CardTitle from "../CardTitle";

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
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Jonas is een dikke sloef</CardTitle>
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
                                <tr className="no-border">
                                    <td>
                                        *technisch gezien correct
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Jonas