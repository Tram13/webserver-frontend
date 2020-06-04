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
        this.getSuggestions()
    };

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
                <div>
                    <SuggestionsTable api={this.props.api} data={this.state.data} getSuggestions={this.getSuggestions}/>
                    {floatingAddButton}
                </div>
            )
        }
    }
}

export default SuggestionsList;

