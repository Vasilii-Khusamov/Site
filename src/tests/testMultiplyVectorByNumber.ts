import {Vector} from '../Library/Math/Vector'
import {multiplyVectorByNumber} from '../Library/Math/VectorOperations/multiplyVectorByNumber'
import {TestError} from './TestError'

export function testMultiplyVectorByNumber(){
	const resultVector = multiplyVectorByNumber(new Vector(1, 2), 2)
	const expectedVector = new Vector(2, 4)
	const epsilon = 0.0000000001

	if (
		Math.abs(resultVector.x - expectedVector.x) > epsilon ||
		Math.abs(resultVector.y - expectedVector.y) > epsilon
	) {
		throw new TestError(`Ожидался вектор равный ${expectedVector}, но он равен ${resultVector}`)
	}
	return true
}