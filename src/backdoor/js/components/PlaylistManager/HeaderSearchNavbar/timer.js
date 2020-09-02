/**
 * Created by Tatav on 28/05/2017.
 */
import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();

        this.state = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }

    tick() {
        this.setState((prevState) => ({
            second: prevState.second + 1 < 60 ? prevState.second + 1 : 0,
            minute: prevState.second === 59 ? (prevState.minute < 59 ? prevState.minute + 1 : 0) : prevState.minute,
            hour: prevState.second === 59 && prevState.minute === 59 ? (prevState.hour < 23 ? prevState.hour + 1 : 0) : prevState.hour,
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="timer">
                <span>{this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour}:{this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute}:{this.state.second < 10 ? `0${this.state.second}` : this.state.second}</span>
            </div>
        );
    }
}
