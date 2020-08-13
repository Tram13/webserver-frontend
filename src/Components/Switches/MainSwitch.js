import React from "react";
import {Route, Switch} from "react-router-dom";
import Wout from "../Content/Wout";
import Jonas from "../Content/Jonas";
import Ardennen from "../Content/Ardennen";
import Minecraft from "../Content/Minecraft";
import Amber from "../Content/Amber";
import Mira from "../Content/Mira";
import Marijn from "../Content/Marijn";
import Home from "../Content/Home";
import DrugDealer from "../Content/DrugDealer/DrugDealer";
import SuggestionsList from "../Content/Suggestions/SuggestionsList";
import SuggestionForm from "../Content/Suggestions/SuggestionForm";
import Error404 from "../Error404";
import AbstractCard from "../AbstractCard";

class MainSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelected = this.props.updateSelected;
    }


    render() {
        return (
            <Switch>
                {/* ALL TABLEVIEWS */}

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

                {/* ALL CARDVIEWS */}

                <Route exact path="/wout">
                    <AbstractCard content={
                        <Wout api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path="/jonas">
                    <AbstractCard content={
                        <Jonas api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path="/ardennen">
                    <AbstractCard content={
                        <Ardennen api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path="/minecraft">
                    <AbstractCard content={
                        <Minecraft api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path="/amber">
                    <AbstractCard content={
                        <Amber api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                {/*<Route exact path="/arnoud">
                    <AbstractCard content={
                        <Arnoud api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>*/}
                <Route exact path="/mira">
                    <AbstractCard content={
                        <Mira api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path="/marijn">
                    <AbstractCard content={
                        <Marijn updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route exact path={"/"}>
                    <AbstractCard content={
                        <Home api={this.props.api} updateSelected={this.updateSelected}/>
                    }/>
                </Route>
                <Route>
                    <AbstractCard content={
                        <Error404 updateSelected={this.updateSelected}/>
                    }/>
                </Route>
            </Switch>
        )
    }
}

export default MainSwitch;