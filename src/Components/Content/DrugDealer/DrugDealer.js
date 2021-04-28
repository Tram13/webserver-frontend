import React from "react";
import RandomGenerator from "./RandomGenerator";
import Marketplace from "./Marketplace";
import EventGenerator from "./EventGenerator";
import M from "materialize-css";
import DrugTable from "./DrugTable/DrugTable";

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
        } else {
            M.toast({html: "Game finished with $" + this.cash});
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
            M.toast({html: "Not enough drugs in inventory!"});
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
            M.toast({html: "Not enough cash!"});
        }
    };

    render() {
        return (
            <div className="white">
                <DrugTable drugs={this.marketplace.drugs} onClickSell={this.onClickSell} onClickBuy={this.onClickBuy}/>
                <div className="left-align">
                    <button className="waves-effect waves-light btn-small" onClick={this.nextDay}>
                        {this.daysleft !== 0 ? "Next day" : "Final score"}
                    </button>
                    <button className="btn-flat disabled">Current cash: ${this.cash}</button>
                    <button className="btn-flat disabled">Days left: {this.daysleft}</button>
                </div>
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