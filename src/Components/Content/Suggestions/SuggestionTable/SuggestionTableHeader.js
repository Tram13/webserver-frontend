import React from "react";

class SuggestionTableHeader extends React.Component {

    render(){
        return (
            <thead>
            <tr>
                <th key={"author"} className="padded-left">Author</th>
                <th key={"message"}>Suggestion</th>
            </tr>
            </thead>
        )
    }
}

export default SuggestionTableHeader;