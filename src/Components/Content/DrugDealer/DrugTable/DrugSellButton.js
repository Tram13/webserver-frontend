import React from "react";

class DrugSellButton extends React.Component {

    render() {
        return (
            <td key={this.props.drug.name + "Sell"}>
                <a href={"#!"} id={this.props.drug.name} className="waves-effect waves-light btn-small red"
                   onClick={this.props.onClickSell}>
                    <i id={this.props.drug.name} className="material-icons right">attach_money</i>
                    Sell
                </a>
            </td>
        )
    }
}

export default DrugSellButton;