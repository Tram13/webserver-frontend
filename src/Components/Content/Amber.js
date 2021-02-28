import React from "react";
import moment from "moment";
import AbstractCard from "../AbstractCard/AbstractCard";
import LoadingAnimation from "../LoadingAnimation";
import M from "materialize-css";
import CardTitle from "../AbstractCard/CardTitle";

class Amber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: undefined,
            data: {},
            fetching: true
        };
        this.props.updateSelected("amber");
        this.intervalID = undefined;
    }

    componentDidMount() {
        //this.intervalID = window.setInterval(() => {this.setState({duration: this.durationFormatter()})}, 25);
        this.setState({duration: "Amber heeft genoeg cold hard cash verdiend."});

        const url = this.props.api["amber"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r,
                                    fetching: false
                                }
                            );
                            M.AutoInit()
                        }
                    )
            )
        )
    }

    componentWillUnmount() {
        if (this.intervalID !== undefined) {
            clearInterval(this.intervalID);
        }
    }

    durationFormatter = () => {
        const duration = this.getDuration();
        return (`Nog ${duration.days()} dagen, ${duration.hours()} uren, ${duration.minutes()} minuten en ${duration.seconds()}.${duration.milliseconds()} seconden.`)
    };

    getDuration = () => {
        const end = moment(new Date(2020, 6, 31, 13, 0, 0, 0));
        const diff = end.diff(moment());
        return moment.duration(diff);
    };

    render() {
        const amber_brugge = <img className="materialboxed responsive-img center-block" width="650"
                                  src={this.state.data["amber_brugge"]}
                                  alt="Amber in Brugge"
                                  data-caption="Amber in Brugge"/>;

        if (this.state.fetching) {
            return (
                <LoadingAnimation/>
            )
        } else {
            return (
                <AbstractCard>
                    <div className="card-content">
                        <CardTitle>Hoelang moet Amber nog werken?</CardTitle>
                        <p>{this.state.duration}</p>
                        {amber_brugge}
                    </div>
                </AbstractCard>
            )
        }
    }
}

export default Amber