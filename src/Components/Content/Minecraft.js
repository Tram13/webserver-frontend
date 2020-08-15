import React from "react";
import LoadingAnimation from "../LoadingAnimation";
import AbstractCard from "../AbstractCard/AbstractCard";
import CardTitle from "../AbstractCard/CardTitle";

class Minecraft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("minecraft");
    }

    componentDidMount() {
        const url = this.props.api["minecraft"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            )
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
            let status;
            if (this.state.data['online']) {
                status = <h6>Huidige status: Online<i className="material-icons padded-left">check</i></h6>
            } else {
                status = <h6>Huidige status: Offline<i className="material-icons padded-left">error</i></h6>
            }
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Minecraft toegangsportaal</CardTitle>
                        <h6>Welkom op het wereldwijde web, 90s-style.</h6>
                        <p>
                            Koop hier je maandticket voor de SkyFactory-server! Huidige maand: mei
                        </p>
                        <p>
                            Preorders voor juni staan ook al open.
                        </p>
                        <p>
                            De inkomsten worden opnieuw geïnvesteerd in de hardware van de server en deze website.
                        </p>
                        <p>
                            Minimumdonatie is 9.95EUR. Vermeld de gebruikersnaam in het bericht.
                        </p>
                        <p/>
                        <h5>
                            <a href="https://www.paypal.me/vermotearno">PayPal-Link</a>
                        </h5>
                        {status}
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Minecraft

