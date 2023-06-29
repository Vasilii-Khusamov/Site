
import { calculateDistanceBetweenPoints } from "../PointOperations/calculateDistanceBetweenPoints.js"
import { Point } from "../Point.js"

export function testCalculateDistanceBetweenPoints() {
    let distance = calculateDistanceBetweenPoints(new Point(1, 3), new Point(2, 5));

    if (distance < 0) {
        throw new Error("Расстояние должно быть положительным")
    }

    const expected = 2.2360679774998

    const epsilon = 0.00000000001
    if (Math.abs(distance - expected) > epsilon) {

        throw new Error(`Ожидалось значение Расстояния равного ${expected}, но оказалось ${distance}`)
    } 

    return true
}