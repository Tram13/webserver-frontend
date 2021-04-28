import React from "react";
import DrugTableHeader from "./DrugTableHeader";
import DrugTableRow from "./DrugTableRow";

class DrugTable extends React.Component {

    drugsToTableRows = () => {
        return (
            <tbody>
            {this.props.drugs.map(
                (drug) =>
                    <DrugTableRow key={drug.name + "DrugTableRow"} drug={drug} onClickSell={this.props.onClickSell}
                                  onClickBuy={this.props.onClickBuy}/>
            )}
            </tbody>)
    };

    render() {
        return (
            <table id="gameTable" className="striped highlight centered">
                <DrugTableHeader/>
                {this.drugsToTableRows()}
            </table>
        )
    }
}

export default DrugTable;