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
import Arnoud from "../Content/Arnoud";
import AbstractCard from "../AbstractCard";

class CardSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelected = this.props.updateSelected;
    }


    render() {
        return (
            <AbstractCard content={
                <Switch>
                    <Route exact path="/wout">
                        <Wout api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/jonas">
                        <Jonas api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/ardennen">
                        <Ardennen api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/minecraft">
                        <Minecraft api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/amber">
                        <Amber api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/arnoud">
                        <Arnoud api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/mira">
                        <Mira api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path="/marijn">
                        <Marijn updateSelected={this.updateSelected}/>
                    </Route>
                    <Route exact path={"/"}>
                        <Home api={this.props.api} updateSelected={this.updateSelected}/>
                    </Route>
                </Switch>
            }/>
        )
    }
}

export default CardSwitch;