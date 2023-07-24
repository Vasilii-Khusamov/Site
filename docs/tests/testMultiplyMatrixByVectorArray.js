import { multiplyMatrixByVectorArray } from '../Library/Math/MatrixOperations/multiplyMatrixByVectorArray.js';
import { Vector } from '../Library/Math/Vector.js';
import { TestError } from './TestError.js';
export function testMultiplyMatrixByVectorArray() {
    const matrix = [
        [2, 2],
        [2, 2]
    ];
    const vectorArray = [new Vector(1, 2), new Vector(3, 4)];
    const resultVectorArray = multiplyMatrixByVectorArray(matrix, vectorArray);
    const expectedVectorArray = [new Vector(6, 6), new Vector(14, 14)];
    const epsilon = 0.00000000001;
    for (let i = 0; i < 2; i++) {
        if (Math.abs(resultVectorArray[i].x - expectedVectorArray[i].x) > epsilon || Math.abs(resultVectorArray[i].y - expectedVectorArray[i].y) > epsilon) {
            throw new TestError(`Ожидался массив равный ${expectedVectorArray}, но он равен ${resultVectorArray}`);
        }
    }
    return true;
}