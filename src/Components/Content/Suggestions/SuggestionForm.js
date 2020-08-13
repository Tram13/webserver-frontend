import React from "react";
import M from "materialize-css"
import Suggestion from "../../../DTO/Suggestion"
import postSuggestion from "../../../APIHelper/Suggestion/PostSuggestion";
import patchSuggestion from "../../../APIHelper/Suggestion/PatchSuggestion";
import {Link, matchPath, Redirect} from "react-router-dom";
import AbstractCard from "../../AbstractCard";

class SuggestionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            name: '',
            message: ''
        };
        this.id = this.getID(); // ID of suggestion if updating, else undefined
        this.props.updateSelected("suggestions");

    }

    getID = () => {
        // TODO: na het toevoegen van een mooie router is dit miss niet meer nodig / kan verbeterd worden.
        //  Doe dit dan ook x)
        const match = matchPath(window.location.pathname, {
            path: "/suggestions/:id/update"
        })
        if (match) {
            return match.params.id;
        } else {
            return undefined;
        }
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    sendAlert = (status, actionString) => {
        if (status.ok) {
            M.toast({html: actionString + " suggestion succesful!"});
        } else {
            M.toast({html: actionString + " suggestion failed!"});
        }
        this.setState({
            redirect: true
        })
    };

    submit = (event) => { // Zoals voorgesteld in https://reactjs.org/docs/forms.html
        event.preventDefault();
        if (this.id) {
            const suggestion = new Suggestion(this.state.name, this.state.message, this.props.api['suggestions'] + "/" + this.id);
            patchSuggestion(suggestion).then(r => this.sendAlert(r, "Updating"))
        } else {
            const suggestion = new Suggestion(this.state.name, this.state.message, this.props.api['suggestions']);
            postSuggestion(suggestion).then(r => this.sendAlert(r, "Adding"))
        }
    };

    componentDidMount() {
        const elems = document.querySelectorAll('.autocomplete');
        //TODO: de lijst van namen genereren adhv databank, met foto van api ofzo
        M.Autocomplete.init(elems, {
            data: {
                "Amber": null,
                "Arno": null,
                "Jonas": null,
                "Wout": null
            }
        });
        if (this.id) {
            fetch(this.props.api["suggestions"]).then(
                response => (response.json()
                    .then(r => {
                        const sug = r.suggestions.filter(sug => sug._id === this.id)[0]
                        this.setState({
                            name: sug.author,
                            message: sug.message
                        });
                        M.updateTextFields();
                    }))
            );
        } else {
            M.updateTextFields();
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/suggestions"}/>;
        } else return (
            <AbstractCard>
                <div className="row card-content">
                    <span className="card-title">Please enter your name and suggestion below.</span>
                    <form className="col s12" onSubmit={this.submit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                {/*TODO: momenteel niet veilig. Check npm audit.   autocomplete*/}
                                <input name="name" id="name" type="text" className="validate"
                                       onChange={this.updateState} value={this.state.name}/>
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <textarea name="message" id="textarea1" className="materialize-textarea"
                                          onChange={this.updateState} value={this.state.message}/>
                                <label htmlFor="textarea1">Your suggestion: </label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit">{this.id ? "Update" : "Create"}
                            <i className="material-icons right">send</i>
                        </button>
                        {/*TODO: de cancel knop moet "back" gaan, niet naar het overzicht*/}
                        <Link to={"/suggestions"} className="waves-effect waves-teal btn-flat">Cancel</Link>
                    </form>
                </div>
            </AbstractCard>
        )
    }
}

export default SuggestionForm

