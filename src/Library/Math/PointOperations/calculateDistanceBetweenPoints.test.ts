import {calculateDistanceBetweenPoints} from "./calculateDistanceBetweenPoints";
import {Point} from "../Point";

test('calculateDistanceBetweenPoints', () => {
    const expectedDistance = 2.23606797749979
    const resultDistance = calculateDistanceBetweenPoints(new Point(1, 3), new Point(2, 5));
    expect(resultDistance).toBe(expectedDistance)
})