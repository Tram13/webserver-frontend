import React from "react";
import AbstractCard from "../../../AbstractCard/AbstractCard";
import CardTitle from "../../../AbstractCard/CardTitle";
import M from "materialize-css";
import LoadingAnimation from "../../../LoadingAnimation";

class PackingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
    }

    componentDidMount() {
        let url = this.props.api["archief"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            url = r["ardennen20200911"];
                            fetch(url).then(response => response.json())
                                .then((r) => {
                                        this.setState(
                                            {
                                                data: r,
                                                fetching: false
                                            }
                                        );
                                    M.AutoInit();
                                    }
                                )
                        }
                    )
            )
        )
    }

    render() {
        const packinglist = <img className="materialboxed responsive-img" width="650"
                                  src={this.state.data["packinglist"]}
                                  alt="screenshot of packinglist"
                                  data-caption="screenshot of packinglist"/>;

        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Packing List</CardTitle>
                        {packinglist}
                    </div>
                </AbstractCard>
            );
        }
    }
}

export default PackingList;