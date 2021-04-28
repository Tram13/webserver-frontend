import React from "react";
import SuggestionTableRow from "./SuggestionTableRow";
import SuggestionTableHeader from "./SuggestionTableHeader";

class SuggestionsTable extends React.Component {

    dataToTableRows = () => {
        return (
            <tbody>
            {this.props.data.map(
                (suggestion) =>
                    <SuggestionTableRow key={suggestion._id + "SuggestionTableRow"} suggestion={suggestion}
                                        api={this.props.api} getSuggestions={this.props.getSuggestions}/>
            )}
            </tbody>)
    };

    render() {
        return (
            <table id={"suggestionsTable"} className={"table striped highlight"}>
                <SuggestionTableHeader/>
                {this.dataToTableRows()}
            </table>
        )
    }
}

export default SuggestionsTable;