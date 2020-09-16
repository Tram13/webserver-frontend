import React from "react";
import AbstractCard from "../../AbstractCard/AbstractCard";
import CardTitle from "../../AbstractCard/CardTitle";
import {Link} from "react-router-dom";

class Ardennen extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("ardennen");
    }

    render() {
        return (
            <AbstractCard>
                <div className="card-content">
                    <CardTitle>Ardennen September 2020 - FAQ</CardTitle>
                    <p>
                        <h6 className="underline semi-bold">Datum?</h6>
                        11-13 september.
                        <h6 className="underline semi-bold">Vervoer?</h6>
                        Auto van Axel en Arno.
                        <h6 className="underline semi-bold">En waar verblijven we dan exact?</h6>
                        <a href="https://www.auborddeleau.net/">Hier.</a>
                        <h6 className="underline semi-bold">Wat doen we dan met Chloë haar concert?</h6>
                        Welk concert?
                        <h6 className="underline semi-bold">Wat met Covid-19?</h6>
                        Fuck jullie allemaal.
                        <Link className="left" to="/archief/ardennen-2020-2-v2/packinglist">Packing list</Link>
                        <br/>
                        <Link className="left" to="/archief/ardennen-2020-2-v2/spel">Spelletje</Link>
                    </p>
                </div>
            </AbstractCard>
        )
    }
}

export default Ardennen;