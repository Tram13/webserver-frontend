import React from "react";
import AbstractCard from "../../AbstractCard/AbstractCard";
import CardTitle from "../../AbstractCard/CardTitle";

class PackingListList extends React.Component {

    constructor(props) {
        super(props);
        this.url = "https://drive.google.com/file/d/1xsanjZGeKsEMLa1MV99TXXDTFlLcu5wG/view?usp=sharing";
    }

    render() {
        console.log('hi');
        return (
            <AbstractCard>
                <div className="card-content">
                    <CardTitle>Packing List</CardTitle>
                    <p>Open de Packing List Excel-file</p>
                    <div className="card-action">
                        <a href={this.link} rel="noopener noreferrer" target="_blank">
                            <i className="material-icons right">
                                open_in_new
                            </i>
                            Go to Packing List
                        </a>
                    </div>
                </div>
            </AbstractCard>
        )
    }
}

export default PackingListList;