import React from "react";

class Ardennen extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("ardennen");
    }

    render() {
        return (
            <div className="card-content">
                <span className="card-title">Ardennen September 2020 - FAQ</span>
                <p>
                    <h6 className="underline semi-bold">Datum?</h6>
                    11-13 september
                    <h6 className="underline semi-bold">Vervoer?</h6>
                    Auto van Jentl, Axel en Arno (en Brent Kappa)
                    <h6 className="underline semi-bold">En waar verblijven we dan exact?</h6>
                    <a href="https://www.auborddeleau.net/">Hier.</a>
                    <h6 className="underline semi-bold">Waarom is het niet meer 4-6 september?</h6>
                    Dan kunnen Axel en Jentl niet mee.
                    <h6 className="underline semi-bold">Wat doen we dan met Chloë haar concert?</h6>
                    Welk concert?
                    <h6 className="underline semi-bold">Wat met Covid-19?</h6>
                    Afwachten wat veiligheidsraad zal beslissen.
                </p>
            </div>
        )
    }
}

export default Ardennen;