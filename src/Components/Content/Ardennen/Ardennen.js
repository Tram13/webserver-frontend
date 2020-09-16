import React from "react";
import AbstractCard from "../../AbstractCard/AbstractCard";
import CardTitle from "../../AbstractCard/CardTitle";
import {Link} from "react-router-dom";
import LoadingAnimation from "../../LoadingAnimation";

class Ardennen extends React.Component {

    export
    default
    Ardennen;

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
    }

    componentDidMount() {
        const url = this.props.api["archief"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            );
                        }
                    )
            )
        )
    }

    render() {
        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Ardennen September 2020 - FAQ</CardTitle>
                        <p>
                            <h6 className="semi-bold">Datum?</h6>
                            11-13 september.
                            <h6 className="semi-bold">Vervoer?</h6>
                            Auto van Axel en Arno.
                            <h6 className="semi-bold">En waar verblijven we dan exact?</h6>
                            <a href="https://www.auborddeleau.net/">Hier.</a>
                            <h6 className="underline semi-bold">Wat doen we dan met Chloë haar concert?</h6>
                            Welk concert?
                            <h6 className="semi-bold">Wat met Covid-19?</h6>
                            Fuck jullie allemaal.
                            <h6 className="semi-bold">Overige links</h6>
                            <Link to="/archief/ardennen-2020-2-v2/packinglist">Packing list</Link>
                            <br/>
                            <Link to="/archief/ardennen-2020-2-v2/spel">Spelletje</Link>
                            <br/>
                            <a href={this.state.data["ardennen20200911"]}>Foto's</a>
                        </p>
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Ardennen;