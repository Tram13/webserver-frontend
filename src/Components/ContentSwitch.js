import React from "react";
import {Route, Switch} from "react-router-dom";
import Wout from "./Content/Wout";
import Jonas from "./Content/Jonas";
import Ardennen from "./Content/Ardennen";
import Minecraft from "./Content/Minecraft";
import DrugDealer from "./Content/DrugDealer/DrugDealer";
import SuggestionsList from "./Content/Suggestions/SuggestionsList";
import SuggestionForm from "./Content/Suggestions/SuggestionForm";
import Amber from "./Content/Amber";
import Mira from "./Content/Mira";
import Marijn from "./Content/Marijn";
import Home from "./Content/Home";
import Error404 from "./Error404";

class ContentSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {api: undefined};
        this.updateSelected = this.props.updateSelected;
    }


    render() {
        return (
            <Switch>
                <Route exact path="/wout">
                    <Wout api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/jonas">
                    <Jonas api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/ardennen">
                    <Ardennen api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/minecraft">
                    <Minecraft api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/drugdealer">
                    <DrugDealer api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route path="/suggestions">
                    <Route exact path="/suggestions">
                        <SuggestionsList api={this.state.api}
                                         updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/suggestions/create">
                        <SuggestionForm api={this.state.api}
                                        updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/suggestions/:id/update">
                        <SuggestionForm api={this.state.api}
                                        updateSelected={this.updateSelected}/>
                    </Route>
                </Route>
                <Route exact path="/amber">
                    <Amber api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/mira">
                    <Mira api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/marijn">
                    <Marijn updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path={"/"}>
                    <Home api={this.state.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route>
                    <Error404 updateSelected={this.updateSelected}/>
                </Route>
            </Switch>
        )
    }
}

export default ContentSwitch;