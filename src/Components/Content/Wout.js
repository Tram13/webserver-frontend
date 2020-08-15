import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";
import AbstractCard from "../AbstractCard";
import {Link} from "react-router-dom";
import CardTitle from "../CardTitle";

class Wout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("wout");
    }

    componentDidMount() {
        const url = this.props.api["wout"];
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
        const kop3 = <img className="materialboxed responsive-img" width="650" src={this.state.data["kop3"]}
                          alt="Kop 3"/>;


        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Wout pest de assistent van WebDev</CardTitle>
                        <div>
                            <h6>when you sudo reboot and it doesn't work anymore</h6>
                            <table>
                                <tbody>
                                <tr className={"no-border"}>
                                    <td>{kop1}</td>
                                    <td>{kop2}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h6>when you do it again</h6>
                            {kop3}
                        </div>
                        <br/>
                        <Link className="left" to="/mira">Mira is een cult.</Link>
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Wout