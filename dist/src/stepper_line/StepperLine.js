import React from "react";
import "./stepper-line.css";
export default class StepperLine extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {
            points: Array.from({ length: this.props.totalSteps }, (v, i) => i)
        };
    }
    render() {
        let me = this;
        return React.createElement("div", { className: "stepper mb-2" }, me.state.points.map((_p, _index) => {
            let isActive = _p < me.props.step ? "active" : "";
            return React.createElement(React.Fragment, null,
                React.createElement("div", { className: `stepper-number ${isActive}` },
                    React.createElement("span", null, _p + me.props.startNumber)),
                _index < me.state.points.length - 1 &&
                    React.createElement("div", { className: `stepper-line ${isActive}` }));
        }));
    }
}
