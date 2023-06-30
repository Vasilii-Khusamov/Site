import {Vector} from '../Math/Vector.js';
import {multiplyVectorByNumber} from '../Math/VectorOperations/multiplyVectorByNumber.js';

export function testMultiplyVectorByNumber(){
	const resultVector = multiplyVectorByNumber(new Vector(1, 2), 2)
	const expectedVector = new Vector(2, 4)
	const epsilon = 0.0000000001

	if (Math.abs(resultVector - expectedVector) > epsilon){
		throw new Error(`Ожидался вектор равный ${expectedVector}, но он равен ${resultVector}`)
	}
	return true
}