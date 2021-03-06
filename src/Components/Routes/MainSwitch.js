import React from "react";
import {Route, Switch} from "react-router-dom";
import Wout from "../Content/Wout";
import Jonas from "../Content/Jonas";
import Ardennen from "../Content/Archief/Ardennen20200911/Ardennen";
import Minecraft from "../Content/Minecraft";
import Amber from "../Content/Amber";
import Mira from "../Content/Mira";
import Marijn from "../Content/Marijn";
import Home from "../Content/Home";
import DrugDealer from "../Content/DrugDealer/DrugDealer";
import SuggestionsList from "../Content/Suggestions/SuggestionsList";
import SuggestionForm from "../Content/Suggestions/SuggestionForm";
import Error404 from "../Error404";
import PackingList from "../Content/Archief/Ardennen20200911/PackingList";
import Spel from "../Content/Archief/Ardennen20200911/Spel";

class MainSwitch extends React.Component {

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
                <Route exact path="/wout">
                    <Wout api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/jonas">
                    <Jonas api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route path="/archief">
                    <Route exact path="/archief/ardennen20200911">
                        <Ardennen api={this.props.api}/>
                    </Route>
                    <Route exact path="/archief/ardennen20200911/packinglist">
                        <PackingList api={this.props.api}/>
                    </Route>
                    <Route exact path="/archief/ardennen20200911/spel">
                        <Spel/>
                    </Route>
                </Route>
                <Route exact path="/minecraft">
                    <Minecraft api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/amber">
                    <Amber api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                {/*<Route exact path="/arnoud">
                        <Arnoud api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>*/}
                <Route exact path="/mira">
                    <Mira api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path="/marijn">
                    <Marijn updateSelected={this.updateSelected}/>
                </Route>
                <Route exact path={"/"}>
                    <Home api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
                <Route>
                    <Error404 api={this.props.api} updateSelected={this.updateSelected}/>
                </Route>
            </Switch>
        )
    }
}

export default MainSwitch;