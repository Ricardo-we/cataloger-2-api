import { Dispatch, SetStateAction, useState } from "react";

export interface useStepperInfo {
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	isLastStep: boolean;
	isFirstStep: boolean;
	next: () => any;
	back: () => any;
	reset: () => any;
}

/****
 * @lastStep 0 index step
 * */
export function useStepper(lastStep: number, initialStep: number = 0) {
	const [step, setStep] = useState<number>(initialStep);
	const isLastStep = step === lastStep;
	const isFirstStep = step === 0;

	return {
		step,
		setStep,
		isLastStep,
		isFirstStep,
		next: () => setStep((prev) => (prev + 1 <= lastStep ? prev + 1 : prev)),
		back: () => setStep((prev) => (prev > 0 ? prev - 1 : prev)),
		reset: () => setStep(0),
	};
}
