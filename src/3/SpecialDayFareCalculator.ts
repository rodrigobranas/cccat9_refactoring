import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SpecialDayFareCalculator implements FareCalculator {
	FARE = 1.5;

	calculate(segment: Segment): number {
		return segment.distance * this.FARE;
	}

}
