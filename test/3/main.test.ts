import Ride from "../../src/3/Ride";
import Segment from "../../src/3/Segment";


test("Deve calcular uma corrida no primeiro dia do mês", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-01T10:00:00"));
	expect(ride.calculateFare()).toBe(15);
});

test("Deve calcular uma corrida normal", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-02T10:00:00"));
	expect(ride.calculateFare()).toBe(21);
});

test("Deve calcular uma corrida noturna", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-02T23:00:00"));
	expect(ride.calculateFare()).toBe(39);
});
