import {calculateVectorAngleByAxisX} from '../Library/Math/VectorOperations/calculateVectorAngleByAxisX'
import {Vector} from '../Library/Math/Vector'
import {TestError} from './TestError'

export function testCalculateVectorAngleByAxisX(){
	const resultAngle = calculateVectorAngleByAxisX(new Vector(1, 0))
	const expectedAngle = 0
	const epsilon = 0.000000000001

	if (Math.abs(resultAngle - expectedAngle) > epsilon){
		throw new TestError(`Ождалось угол равным ${expectedAngle}, но оно равно ${resultAngle}`)
	}
}