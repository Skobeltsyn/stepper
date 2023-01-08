import React from "react";
import "./stepper-line.css";
interface StepperLineProps {
    step: number;
    totalSteps: number;
    startNumber: number;
}
export default class StepperLine extends React.Component<StepperLineProps, any> {
    constructor(_props: StepperLineProps);
    render(): JSX.Element;
}
export {};
