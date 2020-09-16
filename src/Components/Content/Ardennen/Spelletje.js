import React from "react";
import AbstractCard from "../../AbstractCard/AbstractCard";
import CardTitle from "../../AbstractCard/CardTitle";

class Spelletje extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AbstractCard>
                <div className="card-content">
                    <CardTitle>Spelletje</CardTitle>
                    <p>Wie bij iedere maaltijd wasknijper heeft krijgt minpunt. Wasknijper kwijt -> heel veel
                        minpunten</p>
                    <p>Talocan</p>
                    <p>Black Mamba</p>
                    <p>Mystery castle</p>
                    <p>Glas leegdrinken met wc-rol als rietje</p>
                    <p>Sardientje winnen</p>
                    <p>Iemand anders zijn kleren voor een halve dag aandoen (switch broek en shirt, bonus voor
                        onderbroek)</p>
                    <p>Twister</p>
                    <p>Poker</p>
                    <p>Koprol in het bos</p>
                    <p>Handenstand-drinken</p>
                    <p>Met de Passat rijden</p>
                    <p>Bericht sturen naar iemand (bvb wistjedatje)</p>
                    <p>Maak piramide van 3-2-1-1 -> hoe lager ge zit hoe meer punten -> moet fotobewijs van bestaan</p>
                    <p>bodyshot -> beide spelers 1</p>
                    <p>snor voor een volledige dag (krulsnor)</p>
                    <p>Zing een lied enthousiant mee in de auto, lyrics mogen opgezocht worden, maximaal 1 fout</p>
                    <p>Porsche spotten en vervolgens medepassagier slaan (moet wel door niemand anders gespot zijn)</p>
                    <p>Kiekeboe</p>
                    <p>Winnaar van Jonas en Chloë hun spelletje</p>
                    <p>Best verklede persoon</p>
                    <p>Jackbox-winnaar</p>
                    <p>Custom Uno</p>
                    <p>kaarten blazen</p>
                    <p>zuigplek op de bovenborst</p>
                    <p>Klim in een boom</p>
                    <p>Win/verlies trackmania-race</p>
                </div>
            </AbstractCard>
        )
    }
}

export default Spelletje;