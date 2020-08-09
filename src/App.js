import React from 'react';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "./Components/NavBar/NavBar";
import LoadingAnimation from "./Components/LoadingAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Minecraft from "./Components/Content/Minecraft";
import Wout from "./Components/Content/Wout";
import Jonas from "./Components/Content/Jonas";
import Home from "./Components/Content/Home";
import Error404 from "./Components/Error404";
import SuggestionsList from "./Components/Content/Suggestions/SuggestionsList";
import SuggestionForm from "./Components/Content/Suggestions/SuggestionForm";
import Amber from "./Components/Content/Amber";
import DrugDealer from "./Components/Content/DrugDealer/DrugDealer";
import Ardennen from "./Components/Content/Ardennen";
import Marijn from "./Components/Content/Marijn";

//TODO's:
// pagina maken voor virtual drug dealer
// Amber
// Ardennen
// Constanten opslaan in file
// Error 404 na bezoeken van ongeldige pagina in /suggestions en mooier maken
// Daarbij hoort ook het fixen van de nested routers
// Categoriën toevoegen aan de suggesties
// Cooldown zetten op suggesties toevoegen
// Idee voor /wout: Mira is een cult

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {api: undefined, fetching: true};
        this.url = "https://api.tram13.me"
    }

    updateSelected = (selected) => {
        this.setState({selected: selected});
    };

    componentDidMount() {
        fetch(this.url).then(
            response => (response.json()
                    .then((r) =>
                        this.setState(
                            {
                                api: r,
                                fetching: false
                            }
                        )
                    )
            )
        )
    }

    render() {
        if (this.state.fetching) {
            return (
                <Router>
                    <NavBar selected={this.state.selected}/>
                    <Switch>
                        <Route path={""}>
                            <LoadingAnimation/>
                        </Route>
                    </Switch>
                </Router>
            )
        } else {
            return (
                <Router>
                    <NavBar selected={this.state.selected}/>
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
                                <SuggestionsList api={this.state.api} updateSelected={this.updateSelected}/>
                            </Route>
                            <Route exact path="/suggestions/create">
                                <SuggestionForm api={this.state.api} updateSelected={this.updateSelected}/>
                            </Route>
                            <Route exact path="/suggestions/:id/update">
                                <SuggestionForm api={this.state.api} updateSelected={this.updateSelected}/>
                            </Route>
                        </Route>
                        <Route exact path="/amber">
                            <Amber api={this.state.api} updateSelected={this.updateSelected}/>
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
                    {/*TODO: <div className="pin-bottom">Icon made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
                </Router>
            )
        }
    }
}

export default App;
