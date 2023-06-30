import {Vector} from '../Math/Vector.js';
import {calculateVectorLength} from '../Math/VectorOperations/calculateVectorLength.js';

export function testCalculateVectorLength(){
	const resultDistance = calculateVectorLength(new Vector(1, 2))
	const expectedDistance = Math.sqrt(5)
	const epsilon = 0.000000001
	if (Math.abs(resultDistance - expectedDistance) > epsilon){
		throw new Error(`Ожидалось длина вектора равной ${expectedDistance}, но она ровна ${resultDistance}`)
	}
	return true
}