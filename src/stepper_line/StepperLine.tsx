import React from "react";
import "./stepper-line.css";

interface StepperLineProps {
  step: number;
  totalSteps: number;
  startNumber: number;
}

export default class StepperLine extends React.Component<StepperLineProps, any> {
  constructor(_props: StepperLineProps) {
    super(_props);

    this.state = {
      step: this.props.step ? this.props.step : 1,
      points: Array.from({length: this.props.totalSteps}, (v, i) => i)
    };

  }

  render() {
    let me = this;
    return <div className={"stepper mb-2"}>
      {
        me.state.points.map((_p: number, _index: number) => {
          let isActive = _p < me.state.step ? "active" : "";
          return <>
            <div className={`stepper-number ${isActive}`}><span>{_p + me.props.startNumber}</span></div>
            { _index < me.state.points.length - 1 &&
                <div className={`stepper-line ${isActive}`}></div>
            }
          </>
        })
      }
    </div>;
  }
}