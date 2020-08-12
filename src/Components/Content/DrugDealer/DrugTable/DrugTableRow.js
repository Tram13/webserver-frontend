import React from "react";
import DrugBuyButton from "./DrugBuyButton";
import DrugSellButton from "./DrugSellButton";

class DrugTableRow extends React.Component {

    constructor(props) {
        super(props);
        this.drug = this.props.drug
    }

    render() {
        return (
            <tr key={this.drug.name}>
                <td className="padded-left" key={this.drug.name + "Name"}>{this.drug.name}</td>
                <td key={this.drug.name + "Price"}>{"$" + this.drug.price}</td>
                <DrugBuyButton drug={this.drug} onClickBuy={this.props.onClickBuy}/>
                <td key={this.drug.name + "Owned"}>{this.drug.owned}</td>
                <td key={this.drug.name + "BoughtAt"}>{this.drug.boughtAt !== undefined ? "$" + this.drug.boughtAt : ""}</td>
                <DrugSellButton drug={this.drug} onClickSell={this.props.onClickSell}/>
            </tr>
        )
    }
}

export default DrugTableRow;