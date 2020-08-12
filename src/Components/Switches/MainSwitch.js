import TableSwitch from "./TableSwitch";
import AbstractCard from "../AbstractCard";
import CardSwitch from "./CardSwitch";
import React from "react";
import Error404 from "../Error404";
import {Route, Switch} from "react-router-dom";

class MainSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelected = this.props.updateSelected;
    }

    render() {
        return (
            <Switch>
                <CardSwitch api={this.props.api} url={this.props.url} updateSelected={this.props.updateSelected}/>
                <TableSwitch api={this.props.api} url={this.props.url} updateSelected={this.props.updateSelected}/>
                <Switch>
                    <Route>
                        <Error404 updateSelected={this.updateSelected}/>
                    </Route>
                </Switch>
            </Switch>
        )
    }
}

export default MainSwitch;