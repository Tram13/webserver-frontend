import React from "react";
import AbstractCard from "../../../AbstractCard/AbstractCard";
import CardTitle from "../../../AbstractCard/CardTitle";

class PackingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
    }

    componentDidMount() {
        const url = this.props.api["archief"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            );
                        }
                    )
            )
        )
    }

    render() {
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
        );
    }
}

export default PackingList;