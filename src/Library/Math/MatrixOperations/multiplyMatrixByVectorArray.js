import {multiplyMatrixByVector} from './multiplyMatrixByVector.js';

export function multiplyMatrixByVectorArray(matrix, vectorArray) {
	const result = []
	for (const vector of vectorArray) {
		result.push(multiplyMatrixByVector(matrix, vector))
	}
	return result
}