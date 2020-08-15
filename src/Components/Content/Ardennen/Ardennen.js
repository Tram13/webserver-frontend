import React from "react";
import AbstractCard from "../../AbstractCard";
import CardTitle from "../../CardTitle";

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
                    </p>
                </div>
            </AbstractCard>
        )
    }
}

export default Ardennen;