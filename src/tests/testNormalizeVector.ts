import {Vector} from '../Library/Math/Vector'
import {normalizeVector} from '../Library/Math/VectorOperations/normalizeVector'
import {TestError} from './TestError'

export function testNormalizeVector(){
	const resultVector = normalizeVector(new Vector(1, 2))
	const expectedVector = new Vector(0.4472135954999579, 0.8944271909999159)
	const epsilon = 0.00000000000001

	if (Math.abs(resultVector.x - expectedVector.x) > epsilon || Math.abs(resultVector.y - expectedVector.y) > epsilon){
		throw new TestError(`Ожидался вектор равный ${expectedVector}, но он равен ${resultVector}`)
	}
	return true
}