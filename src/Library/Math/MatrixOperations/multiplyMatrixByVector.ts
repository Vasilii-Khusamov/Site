import {Vector} from '../Vector'

export function multiplyMatrixByVector(matrix, vector){
	return new Vector(
		matrix[0][0] * vector.x + matrix[0][1] * vector.y,
		matrix[1][0] * vector.x + matrix[1][1] * vector.y
	)
}