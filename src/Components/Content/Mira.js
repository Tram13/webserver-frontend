import React from "react";
import M from "materialize-css";
import LoadingAnimation from "../LoadingAnimation";
import {Link} from "react-router-dom";

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
        const mira_1 = <img className="materialboxed responsive-img" width="650" src={this.state.data["mira_tekening"]}
                            alt="Tekening van Mira" data-caption="Jonas heeft Mira getekend."/>;
        const mira_2 = <img className="materialboxed responsive-img" width="650" src={this.state.data["mira_choke"]}
                            alt="Mira wordt gechoked" data-caption="Choke me daddy"/>;
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <div className="card-content">
                    <span className="card-title">Mira is een snitch</span>
                    <div>
                        <table>
                            <tbody>
                            <tr className="no-border">
                                <td className="center">100dagen</td>
                                <td className="center"><Link to="/wout">@Wout</Link></td>
                            </tr>
                            <tr className={"no-border"}>
                                <td>{mira_1}</td>
                                <td>{mira_2}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default Mira;