import React from "react";
import DrugBuyButton from "./DrugBuyButton";

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
                <td key={this.drug.name + "Sell"}>
                    <a href={"#!"} id={this.drug.name} className="waves-effect waves-light btn"
                       onClick={this.props.onClickSell}>
                        <i id={this.drug.name} className="material-icons right">attach_money</i>
                        Sell
                    </a>
                </td>
            </tr>
        )
    }
}

export default DrugTableRow;