import React from "react";

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
                <a href="https://www.airbnb.be/rooms/34492424?wl_source=list&wl_id=775709320&role=wishlist_owner&check_in=2020-09-11&check_out=2020-09-13&adults=11&guests=11&source_impression_id=p3_1592073131_Zk8QmX1Rj8%2BDNoTk">Hier.</a>
                <h4>Waarom is het niet meer 4-6 september?</h4>
                Dan kunnen Axel en Jentl niet mee.
                <h4>Wat doen we dan met Chloë haar concert?</h4>
                Welk concert?
            </div>
        )
    }
}

export default Ardennen;