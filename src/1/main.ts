// @ts-nocheck
// calculate ride
export function calc (movArray) {
	let result = 0;
	for (const mov of movArray) {
		if (mov.dist != null && mov.dist != undefined && typeof mov.dist === "number" && mov.dist > 0) {
			if (mov.ds != null && mov.ds != undefined && mov.ds instanceof Date && mov.ds.toString() !== "Invalid Date") {
	
				// overnight
			
				if (mov.ds.getHours() >= 22 || mov.ds.getHours() <= 6) {
			
					// not sunday
					if (mov.ds.getDay() !== 0) {
						
						result += mov.dist * 3.90;
					// sunday
					} else {
						result += mov.dist * 5;
	
					}
				} else {
					// sunday
					if (mov.ds.getDay() === 0) {
			
						result += mov.dist * 2.9;
			
					} else {
						result += mov.dist * 2.10;
					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(dist);
	
			return -1;
		}
		
	}
	if (result < 10) {
		return 10;
	} else {
		return result;
	}
}

console.log(calc([
	{ dist: 10, ds: new Date("2021-03-01T10:00:00") }
]));
console.log(calc([
	{ dist: 10, ds: new Date("2021-03-01T23:00:00") }
]));
console.log(calc([
	{ dist: 10, ds: new Date("2021-03-07T10:00:00") }
]));
console.log(calc([
	{ dist: 10, ds: new Date("2021-03-07T23:00:00") }
]));
console.log(calc([
	{ dist: -10, ds: new Date("2021-03-01T10:00:00") }
]));
console.log(calc([
	{ dist: 10, ds: new Date("abcdef") }
]));
console.log(calc([
	{ dist: 3, ds: new Date("2021-03-01T10:00:00") }
]));
