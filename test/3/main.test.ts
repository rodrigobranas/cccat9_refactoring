import NormalFareCalculatorHandler from "../../src/3/NormalFareCalculatorHandler";
import OvernightFareCalculatorHandler from "../../src/3/OvernightFareCalculatorHandler";
import OvernightSundayFareCalculatorHandler from "../../src/3/OvernightSundayFareCalculatorHandler";
import Ride from "../../src/3/Ride";
import Segment from "../../src/3/Segment";
import SpecialDayFareCalculatorHandler from "../../src/3/SpecialDayFareCalculatorHandler";
import SundayFareCalculator from "../../src/3/SundayFareCalculator";
import SundayFareCalculatorHandler from "../../src/3/SundayFareCalculatorHandler";

let ride: Ride;

beforeEach(function () {
	const normalFareCalculator = new NormalFareCalculatorHandler();
	const overnightFareCalculator = new OvernightFareCalculatorHandler(normalFareCalculator);
	const overnightSundayFareCalculator = new OvernightSundayFareCalculatorHandler(overnightFareCalculator);
	const sundayFareCalculator = new SundayFareCalculatorHandler(overnightSundayFareCalculator);
	const specialDayCalculator = new SpecialDayFareCalculatorHandler(sundayFareCalculator);
	ride = new Ride(specialDayCalculator);
});

test("Deve calcular uma corrida no primeiro dia do mês", function () {
	ride.addSegment(10, new Date("2021-03-01T10:00:00"));
	expect(ride.calculateFare()).toBe(15);
});

test("Deve calcular uma corrida normal", function () {
	ride.addSegment(10, new Date("2021-03-02T10:00:00"));
	expect(ride.calculateFare()).toBe(21);
});

test("Deve calcular uma corrida noturna", function () {
	ride.addSegment(10, new Date("2021-03-02T23:00:00"));
	expect(ride.calculateFare()).toBe(39);
});
