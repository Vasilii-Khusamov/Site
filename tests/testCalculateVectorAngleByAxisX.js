import {calculateVectorAngleByAxisX} from '../Math/VectorOperations/calculateVectorAngleByAxisX.js';
import {Vector} from '../Math/Vector.js';

export function testCalculateVectorAngleByAxisX(){
	const resultAngle = calculateVectorAngleByAxisX(new Vector(1, 0))
	const expectedAngle = Math.PI / 2
	const epsilon = 0.000000000001

	if (Math.abs(resultAngle - expectedAngle) > epsilon){
		throw new Error(`Ождалось угол равным ${expectedAngle}, но оно равно ${resultAngle}`)
	}
}