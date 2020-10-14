import React from "react";
import M from "materialize-css"
import '../../style.css'
import LoadingAnimation from "../LoadingAnimation";
import AbstractCard from "../AbstractCard/AbstractCard";
import CardTitle from "../AbstractCard/CardTitle";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("");
    }

    componentDidMount() {
        const url = this.props.api["home"];
        fetch(url).then(
            response => (response.json()
                    .then(r => {
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
        const friendship = <img className="materialboxed responsive-img center-block" width="650" src={this.state.data["friendship"]}
                          alt="Friendship is beautiful"/>;
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>In Kets we trust.</CardTitle>
                        {friendship}
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Home
