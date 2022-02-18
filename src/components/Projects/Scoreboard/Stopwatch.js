import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0 });
        this.handleStopwatch();
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return (
            <div className="d-flex flex-column order-2 mt-2 mr-sm-2">
                <span>Stopwatch</span>
                <span>{seconds}</span>
                <div className="row">
                    <button className={`btn btn-sm  ${this.state.isRunning ? `btn-danger` : `btn-success`} mx-2`} onClick={this.handleStopwatch}>
                        {this.state.isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button className="btn btn-sm btn-success mx-2" onClick={this.handleReset}>Reset</button>
                </div>

            </div>
        );
    }
}

export default Stopwatch;