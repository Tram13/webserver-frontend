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
                <Link to="/suggestions/create">Zeg het dan eh.</Link>
                <p/>
                <h1>Hier zijn de fucking links</h1>
                <a href="https://www.airbnb.be/rooms/34492424?wl_source=list&wl_id=775709320&role=wishlist_owner&check_in=2020-09-11&check_out=2020-09-13&adults=11&guests=11&source_impression_id=p3_1592073131_Zk8QmX1Rj8%2BDNoTk">Huis 1</a>
                <p/>
                <a href="https://www.airbnb.be/rooms/20699733?wl_source=list&wl_id=775709320&role=wishlist_owner&check_in=2020-09-11&check_out=2020-09-13&adults=11&guests=11&source_impression_id=p3_1592073133_sXb08SyA0C%2BK3%2FmE">Huis 2</a>
                <p/>
                <a href="https://nl.belvilla.be/vakantiehuizen/belgie/ondenval-13-personen-BE-4950-135?arrival_date=2020-09-11&nights=2&pax=11&uad=1&uls=1">Huis 3</a>
                <p/>
                <a href="https://nl.belvilla.be/vakantiehuizen/belgie/marche-en-famenne-13-personen-BE-1036-01?arrival_date=2020-09-09&nights=2&pax=11&uad=1&uls=1">Huis 4</a>
                <p/>
                <a href="https://www.strawpoll.me/20340909">Poll</a>
            </div>
        )
    }
}

export default Ardennen;