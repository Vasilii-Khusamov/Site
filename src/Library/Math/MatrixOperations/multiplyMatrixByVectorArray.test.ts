import {Vector} from "../Vector";
import {multiplyMatrixByVectorArray} from "./multiplyMatrixByVectorArray";

test('multiplyMatrixByVectorArray', () => {
    const matrix = [
        [2, 2],
        [2, 2]
    ]
    const vectorArray = [new Vector(1, 2), new Vector(3, 4)]
    const resultVectorArray = multiplyMatrixByVectorArray(matrix, vectorArray)
    const expectedVectorArray = [new Vector(6, 6), new Vector(14,14)]

    expect(resultVectorArray).toEqual(expectedVectorArray)
})