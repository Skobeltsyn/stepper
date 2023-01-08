import React from "react";
import StepperLine from "../stepper_line/StepperLine";

interface StepperProps {
  children?: JSX.Element[];
  activeStep?: number;
}

interface StepperState {
  activeStep: number;
}

export default class Stepper extends React.Component<StepperProps, StepperState> {

  constructor(_props: StepperProps) {
    super(_props);
    this.state = {
      activeStep: this.props.activeStep ? this.props.activeStep : 0
    }
    this.changeStep = this.changeStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.gotoStep = this.gotoStep.bind(this);
  }

  changeStep(_delta: number) {
    let me = this;
    let prevState = {...me.state};
    prevState.activeStep += _delta;
    me.setState(prevState);
  }

  gotoStep(_stepNum: number) {
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

    return <div>
      { me.props.children &&
        <>
          <StepperLine startNumber={1} totalSteps={me.props.children.length} step={me.state.activeStep} />
          { me.props.children.map((_stepChild: JSX.Element, _index: number ) => {
              return <div style={me.state.activeStep === _index ? {display: "flex"} : {display: "none"} } className={"stepper-layer"}>
                {_stepChild}
              </div>
            })
          }
        </>
      }
    </div>;
  }
}
