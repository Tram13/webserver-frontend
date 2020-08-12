import React from "react";
import {Route, Switch} from "react-router-dom";
import DrugDealer from "../Content/DrugDealer/DrugDealer";
import SuggestionsList from "../Content/Suggestions/SuggestionsList";
import SuggestionForm from "../Content/Suggestions/SuggestionForm";


class TableSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelected = this.props.updateSelected;
    }


    render() {
        return (
            <Switch>
                <Route exact path="/drugdealer">
                    <DrugDealer api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route path="/suggestions">
                    <Route exact path="/suggestions">
                        <SuggestionsList api={this.props.api}
                                         updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/suggestions/create">
                        <SuggestionForm api={this.props.api}
                                        updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/suggestions/:id/update">
                        <SuggestionForm api={this.props.api}
                                        updateSelected={this.updateSelected}/>
                    </Route>
                </Route>
            </Switch>
        )
    }
}

export default TableSwitch;