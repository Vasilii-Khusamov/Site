import {Vector} from '../Math/Vector.js';
import {subtructVectors} from '../Math/VectorOperations/subtractVectors.js';

export function testSubtractVectors() {
	const vectorDifference = subtructVectors(new Vector(1,2), new Vector(3,4));
   if (vectorDifference.x !== -2 || vectorDifference.y !== -2) {
		throw new Error(`Вычетание векторов работает не правильно ${vectorDifference}`)
	}
	return true
}