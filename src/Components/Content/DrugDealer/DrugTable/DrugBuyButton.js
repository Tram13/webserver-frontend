import React from "react";

class DrugBuyButton extends React.Component {

    render() {
        return (
            <td key={this.props.drug.name + "Buy"}>
                <a href={"#!"} id={this.props.drug.name} className="waves-effect waves-light btn"
                   onClick={this.props.onClickBuy}>
                    <i id={this.props.drug.name} className="material-icons right">attach_money</i>
                    Buy
                </a>
            </td>
        )
    }
}

export default DrugBuyButton;