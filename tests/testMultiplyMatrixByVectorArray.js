import {multiplyMatrixByVectorArray} from '../Math/MatrixOperations/multiplyMatrixByVectorArray.js';
import {Vector} from '../Math/Vector.js';

export function testMultiplyMatrixByVectorArray(){
	const matrix = [
		[2, 2],
		[2, 2]
	]
	const vectorArray = [new Vector(1, 2), new Vector(3, 4)]
	const resultVectorArray = multiplyMatrixByVectorArray(matrix, vectorArray)
	const expectedVectorArray = [new Vector(5, 5), new Vector(13,13)]
	const epsilon = 0.00000000001

	for (let i = 0; i < 2; i++){
		if (Math.abs(resultVectorArray[i].x - expectedVectorArray[i].x) > epsilon || Math.abs(resultVectorArray[i].y - expectedVectorArray[i].y) > epsilon){
			throw new Error(`Ожидался массив равный ${expectedVectorArray}, но он равен ${resultVectorArray}`)
		}
	}
	return true
}