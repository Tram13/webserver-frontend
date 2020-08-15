import React from "react";
import LoadingAnimation from "../../LoadingAnimation";
import {Link} from "react-router-dom";
import SuggestionsTable from "./SuggestionTable/SuggestionsTable";

class SuggestionsList extends React.Component {
    _id;

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("suggestions");
        this.timeout = 10000 // 10 seconds
    };

    getSuggestions = () => {
        fetch(this.props.api["suggestions"]).then(response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r["suggestions"],
                                    fetching: false
                                }
                            )
                        }
                    )
            )
        )
    };

    componentDidMount() {
        this.intervalID = window.setInterval(() => {this.getSuggestions()}, this.timeout);
    };

    componentWillUnmount() {
        if (this.intervalID !== undefined) {
            clearInterval(this.intervalID);
        }
    }

    render() {
        const floatingAddButton = <div className="fixed-action-btn">
            <Link to="suggestions/create" className="btn-floating btn-large teal">
                <i className="large material-icons">add</i>
            </Link>
        </div>;
        if (this.state.fetching) {
            return <LoadingAnimation/>
        } else {
            return (
                <div className="white">
                    <SuggestionsTable api={this.props.api} data={this.state.data} getSuggestions={this.getSuggestions}/>
                    {floatingAddButton}
                </div>
            )
        }
    }
}

export default SuggestionsList;

