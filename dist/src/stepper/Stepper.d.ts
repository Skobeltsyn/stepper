import React from "react";
interface StepperProps {
    children?: JSX.Element[];
    activeStep?: number;
}
interface StepperState {
    activeStep: number;
}
export default class Stepper extends React.Component<StepperProps, StepperState> {
    constructor(_props: StepperProps);
    changeStep(_delta: number): void;
    gotoStep(_stepNum: number): void;
    nextStep(): void;
    prevStep(): void;
    render(): JSX.Element;
}
export {};
