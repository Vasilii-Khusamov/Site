import {calculateVectorAngle} from '../Math/VectorOperations/calculateVectorAngle.js';
import {Vector} from '../Math/Vector.js';

export function testCalculateVectorAngle(){
	const resultAngle = calculateVectorAngle(new Vector(0, 1), new Vector(1, 0))
	const expectedAngle = -Math.PI / 2
	const epsilon = 0.0000000001
	if (Math.abs(resultAngle - expectedAngle) > epsilon) {
		throw new Error(`Ождалось угол равным ${expectedAngle}, но оно равно ${resultAngle}`)
	}
	return true
}