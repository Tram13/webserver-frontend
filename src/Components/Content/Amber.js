import React from "react";
import moment from "moment";

class Amber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {duration: undefined};
        this.props.updateSelected("amber");
        this.intervalID = undefined;
    }

    componentDidMount() {
        // this.intervalID = window.setInterval(() => {this.setState({duration: this.durationFormatter()})}, 25);
        this.setState({duration: "Amber heeft genoeg cold hard cash verdiend."})
    }

    componentWillUnmount() {
        if (this.intervalID !== undefined) {
            clearInterval(this.intervalID);
        }
    }

    durationFormatter = () => {
        const duration = this.getDuration();
        return(`Nog ${duration.days()} dagen, ${duration.hours()} uren, ${duration.minutes()} minuten en ${duration.seconds()}.${duration.milliseconds()} seconden.`)
    }

    getDuration = () => {
        const end = moment(new Date(2020, 6, 31, 13, 0, 0, 0));
        const diff = end.diff(moment());
        return moment.duration(diff);
    }

    render() {
        return (
            <div className="padded-left">
                <h3>Hoelang moet Amber nog werken?</h3>
                <p>{this.state.duration}</p>
            </div>
        )
    }
}

export default Amber