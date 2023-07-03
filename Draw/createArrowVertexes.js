import {createRotationMatrix} from '../Math/MatrixOperations/createRotationMatrix.js';
import {multiplyMatrixByVectorArray} from '../Math/MatrixOperations/multiplyMatrixByVectorArray.js';
import {Vector} from '../Math/Vector.js';
import {addVectors} from '../Math/VectorOperations/addVectors.js';
import {calculateVectorAngle} from '../Math/VectorOperations/calculateVectorAngle.js';
import {calculateVectorAngleByAxisX} from '../Math/VectorOperations/calculateVectorAngleByAxisX.js';
import {Point} from '../Point.js';

/**
 * @param {Point} point1
 * @param {Point} point2
 * @param {Vector[]} normalizedArrowVertexes
 * */
export function createArrowVertexes(point1, point2, normalizedArrowVertexes){
	const arrowAngle = calculateVectorAngleByAxisX(new Vector(point2.x - point1.x, point2.y - point1.y))
	const arrowPosition = new Vector(point1.x, point1.y)
	let resultArrowVertexes = []
	for (const normalizedVertex of normalizedArrowVertexes) {
		resultArrowVertexes.push(new Point(normalizedVertex.x + arrowPosition.x, normalizedVertex.y + arrowPosition.y))
	}
	resultArrowVertexes = multiplyMatrixByVectorArray(createRotationMatrix(arrowAngle), resultArrowVertexes)
	return resultArrowVertexes
}