import {Vector} from '../Library/Math/Vector'
import {calculateVectorLength} from '../Library/Math/VectorOperations/calculateVectorLength'
import {TestError} from './TestError'

export function testCalculateVectorLength(){
	const resultDistance = calculateVectorLength(new Vector(1, 2))
	const expectedDistance = Math.sqrt(5)
	const epsilon = 0.000000001
	if (Math.abs(resultDistance - expectedDistance) > epsilon){
		throw new TestError(`Ожидалось длина вектора равной ${expectedDistance}, но она ровна ${resultDistance}`)
	}
	return true
}