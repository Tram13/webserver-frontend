import React from "react";
import {Link} from "react-router-dom";

class Ardennen extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("ardennen");
    }


    render() {
        return (
            <div className="padded-left">
                <h3>Ardennen September 2020</h3>
                <h4>Datum</h4>
                11-13 september
                <h4>Vervoer</h4>
                Auto van Jentl, Axel en Arno (en Brent Kappa)
                <h4>En waar verblijven we dan exact?</h4>
                Dunno man, zoeken we nog wel.
                <h4>Waarom is het niet meer 4-6 september?</h4>
                Dan kunnen Axel en Jentl niet mee.
                <h4>Wat doen we dan met Chloë haar concert?</h4>
                Jentl en/of Axel brengen haar naar Brussel, en komen haar na afloop weer ophalen.
                <h4>Is dat geen shitty oplossing?</h4>
                Heb ge betere suggestie dan?
                <p/>
                <Link to="/suggestions/create">Zeg het dan eh.</Link>
            </div>
        )
    }
}

export default Ardennen;