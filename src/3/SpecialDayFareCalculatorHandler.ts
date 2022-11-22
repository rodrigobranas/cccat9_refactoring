import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class SpecialDayFareCalculatorHandler implements FareCalculatorHandler {
	FARE = 1.5;
	next?: FareCalculatorHandler;

	constructor (next?: FareCalculatorHandler) {
		this.next = next;
	}

	calculate(segment: Segment): number {
		if (segment.isSpecialDay()) {
			return segment.distance * this.FARE;
		}
		if (!this.next) throw new Error();
		return this.next.calculate(segment);
	}

}
