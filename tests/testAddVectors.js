import { addVectors } from '../Math/VectorOperations/addVectors'
import {TestError} from './TestError.js';

export function testAddVectors() {
    const vectorSum = addVectors(new Vector(1, 2), new Vector(3, 4))
    if (vectorSum.x !== 4 || vectorSum.y !== 6) {
        throw new TestError(`вектора сложились не правильно ${vectorSum}`)
    }
    return true
}