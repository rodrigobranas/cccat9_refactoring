export default class Segment {
	SPECIAL_DAY_FARE = 1;
	OVERNIGHT_START = 22;
	OVERNIGHT_END = 6;

	constructor (readonly distance: number, readonly date: Date) {
		if (!this.isValidDistance()) throw new Error("Invalid distance");
		if (!this.isValidDate()) throw new Error("Invalid date");
	}
	
	isValidDistance () {
		return this.distance != null && this.distance != undefined && typeof this.distance === "number" && this.distance > 0;
	}
	
	isValidDate () {
		return this.date != null && this.date != undefined && this.date instanceof Date && this.date.toString() !== "Invalid Date";
	}

	isOvernight () {
		return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
	}
	
	isSunday () {
		return this.date.getDay() === 0;
	}
	
	isSpecialDay () {
		return this.date.getDate() === this.SPECIAL_DAY_FARE;
	}
}
