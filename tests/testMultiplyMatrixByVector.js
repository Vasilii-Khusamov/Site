import {multiplyMatrixByVector} from '../Math/MatrixOperations/multiplyMatrixByVector.js';
import {Vector} from '../Math/Vector.js';
import {TestError} from './TestError.js';

export function testMultiplyMatrixByVector(){
	const matrix = [
		[1, 2],
		[3, 4]
	]
	const vector = new Vector(2, 3)
	const expectedVector = new Vector(8, 18)
	const resultVector = multiplyMatrixByVector(matrix, vector)
	const epsilon = 0.0000000001

	if (Math.abs(resultVector.x - expectedVector.x) > epsilon || Math.abs(resultVector.y - expectedVector.y) > epsilon){
		throw new TestError(`Ожидался вектор равным ${expectedVector}, но он равен ${resultVector}`)
	}
	return true
}