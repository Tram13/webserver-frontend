import React from "react";

class DrugTableHeader extends React.Component {

    render() {
        return(
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
        )
    }
}

export default DrugTableHeader;