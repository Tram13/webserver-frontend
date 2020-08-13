import React from 'react';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "./Components/NavBar/NavBar";
import LoadingAnimation from "./Components/LoadingAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainSwitch from "./Components/MainSwitch";

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
            // NavBar should always be inside a router
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
                    <MainSwitch api={this.state.api} url={this.url} updateSelected={this.updateSelected}/>
                    {/*TODO: <div className="pin-bottom">Icon made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
                </Router>
            )
        }
    }
}

export default App;