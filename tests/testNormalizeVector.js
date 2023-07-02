import {Vector} from '../Math/Vector.js';
import {normalizeVector} from '../Math/VectorOperations/normalizeVector.js';
import {TestError} from './TestError.js';

export function testNormalizeVector(){
	const resultVector = normalizeVector(new Vector(1, 2))
	const expectedVector = new Vector(0.4472135954999579, 0.8944271909999159)
	const epsilon = 0.00000000000001

	if (Math.abs(resultVector.x - expectedVector.x) > epsilon || Math.abs(resultVector.y - expectedVector.y) > epsilon){
		throw new TestError(`Ожидался вектор равный ${expectedVector}, но он равен ${resultVector}`)
	}
	return true
}