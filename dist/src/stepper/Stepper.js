import React from "react";
import StepperLine from "../stepper_line/StepperLine";
export default class Stepper extends React.Component {
    constructor(_props) {
        super(_props);
        this.state = {
            activeStep: this.props.activeStep ? this.props.activeStep : 0
        };
        this.changeStep = this.changeStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.gotoStep = this.gotoStep.bind(this);
    }
    changeStep(_delta) {
        let me = this;
        let prevState = Object.assign({}, me.state);
        prevState.activeStep += _delta;
        me.setState(prevState);
    }
    gotoStep(_stepNum) {
        let delta = _stepNum - this.state.activeStep;
        this.changeStep(delta);
    }
    nextStep() {
        this.changeStep(1);
    }
    prevStep() {
        this.changeStep(-1);
    }
    render() {
        let me = this;
        return React.createElement("div", null, me.props.children &&
            React.createElement(React.Fragment, null,
                React.createElement(StepperLine, { startNumber: 1, totalSteps: me.props.children.length, step: me.state.activeStep }),
                me.props.children.map((_stepChild, _index) => {
                    return React.createElement("div", { style: me.state.activeStep === _index ? { display: "flex" } : { display: "none" }, className: "stepper-layer" }, _stepChild);
                })));
    }
}
