import {Vector} from '../Library/Math/Vector.js';
import {subtructVectors} from '../Library/Math/VectorOperations/subtractVectors.js';
import {TestError} from './TestError.js';

export function testSubtractVectors() {
	const vectorDifference = subtructVectors(new Vector(1,2), new Vector(3,4));
   if (vectorDifference.x !== -2 || vectorDifference.y !== -2) {
		throw new TestError(`Вычетание векторов работает не правильно ${vectorDifference}`)
	}
	return true
}