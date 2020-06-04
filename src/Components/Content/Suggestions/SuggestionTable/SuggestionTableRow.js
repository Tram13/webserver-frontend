import React from "react";
import {Link} from "react-router-dom";
import ModalDelete from "../ModalDelete";

class SuggestionTableRow extends React.Component {

    render() {
        return (
            <tr key={this.props.suggestion._id}>
                <td className="padded-left" key={this.props.suggestion._id + this.props.suggestion.author}>{this.props.suggestion.author}</td>
                <td key={this.props.suggestion._id + this.props.suggestion.message}>{this.props.suggestion.message}</td>
                <td key={this.props.suggestion._id + "Update"}>
                    <Link to={"/suggestions/" + this.props.suggestion._id + "/update"}
                          className="waves-effect waves-light btn-small red lighten-2 right">
                        <i className="material-icons left">
                            edit
                        </i>
                        Update
                    </Link>
                </td>
                <td key={this.props.suggestion._id + "Delete"}>
                    <button data-target={this.props.suggestion._id}
                            className="modal-trigger waves-effect waves-light btn-small red right">
                        Delete
                        <i className="material-icons left">
                            delete_forever
                        </i>
                    </button>
                </td>
                <td key={this.props.suggestion._id + "Modal"}>
                    <ModalDelete after={this.props.getSuggestions} id={this.props.suggestion._id} url={this.props.api["suggestions"] + "/" + this.props.suggestion._id}/>
                </td>
            </tr>
        )
    }
}

export default SuggestionTableRow;