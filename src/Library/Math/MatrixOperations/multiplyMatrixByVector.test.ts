import {Vector} from "../Vector";
import {multiplyMatrixByVector} from "./multiplyMatrixByVector";

test('multiplyMatrixByVector', function () {
    const matrix = [
        [1, 2],
        [3, 4]
    ]
    const expectedVector = new Vector(8, 18)
    const resultVector = multiplyMatrixByVector(matrix, new Vector(2, 3))

    expect(resultVector).toEqual(expectedVector)
})