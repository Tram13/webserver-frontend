import React from "react";
import RandomGenerator from "./RandomGenerator";
import Marketplace from "./Marketplace";
import EventGenerator from "./EventGenerator";

class DrugDealer extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("drugdealer");
        this.marketplace = new Marketplace();
        this.rg = new RandomGenerator();
        this.eventGenerator = new EventGenerator();
        this.cash = 2500;
        this.daysleft = 31;
        this.marketplace.updatePrices();
    }

    nextDay = (event) => {
        event.preventDefault();
        if (this.daysleft > 0) {
            this.marketplace.updatePrices();
            this.eventGenerator.applyRandomEvent();
            this.daysleft--;
            // Because the state itself doesn't get updated
            this.forceUpdate();
        }
        else {
            alert("Game finished with $" + this.cash);
        }
    };

    onClickSell = (event) => {
        event.preventDefault();
        const amount = 1;
        const drug = this.marketplace.findDrugByName(event.target.id);
        if (drug.owned >= amount) {
            drug.sell(amount);
            this.cash += drug.price * amount;
            this.forceUpdate();
        } else {
            alert("Not enough drugs in inventory!");
        }
    };

    onClickBuy = (event) => {
        event.preventDefault();
        const amount = 1
        const drug = this.marketplace.findDrugByName(event.target.id);
        if (this.cash >= drug.price) {
            this.cash -= drug.price * amount;
            drug.buy(amount);
            this.forceUpdate();
        } else {
            alert("Not enough cash!");
        }
    };

    drugsToTableRows = () => {
        return this.marketplace.drugs.map(
            (drug) =>
                <tr key={drug.name}>
                    <td className="padded-left" key={drug.name + "Name"}>{drug.name}</td>
                    <td key={drug.name + "Price"}>{"$" + drug.price}</td>
                    <td key={drug.name + "Buy"}>
                        <a href={"#!"} id={drug.name} className="waves-effect waves-light btn"
                           onClick={this.onClickBuy}>
                            <i id={drug.name} className="material-icons right">attach_money</i>
                            Buy
                        </a>
                    </td>
                    <td key={drug.name + "Owned"}>{drug.owned}</td>
                    <td key={drug.name + "BoughtAt"}>{drug.boughtAt !== undefined ? "$" + drug.boughtAt : ""}</td>
                    <td key={drug.name + "Sell"}>
                        <a href={"#!"} id={drug.name} className="waves-effect waves-light btn"
                           onClick={this.onClickSell}>
                            <i id={drug.name} className="material-icons right">attach_money</i>
                            Sell
                        </a>
                    </td>
                </tr>
        );
    };

    render() {
        return (
            <div>
                <table id="gameTable" className="striped highlight centered">
                    <thead>
                    <tr>
                        <th key="drugName" className="padded-left">Drug name</th>
                        <th key="drugPrice">Price</th>
                        <th key="drugBuy">Buy</th>
                        <th key="drugOwned">Owned</th>
                        <th key="drugBoughtAt">Last bought at</th>
                        <th key="drugSell">Sell</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.drugsToTableRows()}
                    </tbody>
                </table>
                <a href={"#!"} className="waves-effect waves-light btn" onClick={this.nextDay}>Next Day</a>
                <a className="btn-flat disabled">Current cash: ${this.cash}</a>
                <a className="btn-flat disabled">Days left: {this.daysleft}</a>
            </div>
        )
    }
}

export default DrugDealer;
/* TODO: deze events laten werken

        randomEvent() {
                if (xx === 5) {
                    const lost = random(2000);
                    if ((cash - lost) < 0) lost = cash;
                    alert("You were mugged in the subway, you lost " + Currency(lost));
                    cash = cash - lost;
                    if (cash < 0) cash = 0;
                }

                if (xx === 7) {
                    const x = random(9) - 1;
                    alert("Your crackhead friend unloaded some " + drugs[x] + " on you!");
                    yourdrugs[x] = drugs[x];
                    yourprice[x] = 0;
                    quants[x] = Number(quants[x]) + Number(random(5));
                    showyours();
                }
                if (xx === 8) {
                    const x = random(9) - 1
                    alert(drugs[x] + " prices are low!");
                    price[x] = price[x] / 2;
                }
                if (xx === 11) {
                    const x = random(9) - 1;
                    alert("Big " + drugs[x] + " bust. Prices have doubled!");
                    price[x] = price[x] * 2;
                }
            }
        }
    }
    */