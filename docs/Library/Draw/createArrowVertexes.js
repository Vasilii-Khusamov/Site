import { createRotationMatrix } from '../Math/MatrixOperations/createRotationMatrix.js';
import { multiplyMatrixByVectorArray } from '../Math/MatrixOperations/multiplyMatrixByVectorArray.js';
import { Vector } from '../Math/Vector.js';
import { calculateVectorAngleByAxisX } from '../Math/VectorOperations/calculateVectorAngleByAxisX.js';
/**
 * @param {Point} point1
 * @param {Point} point2
 * @param {Vector[]} normalizedArrowVertexes
 * */
export function createArrowVertexes(point1, point2, normalizedArrowVertexes) {
    let resultArrowVertexes = [];
    // Вращаем стрелку
    const arrowAngle = calculateVectorAngleByAxisX(new Vector(point2.x - point1.x, point2.y - point1.y));
    const rotationMatrix = createRotationMatrix(arrowAngle);
    resultArrowVertexes = multiplyMatrixByVectorArray(rotationMatrix, normalizedArrowVertexes);
    // Перемещаем стрелку
    const arrowPosition = new Vector(point1.x, point1.y);
    let resultArrowVertexes2 = [];
    for (const normalizedVertex of resultArrowVertexes) {
        resultArrowVertexes2.push(new Vector(normalizedVertex.x + arrowPosition.x, normalizedVertex.y + arrowPosition.y));
    }
    return resultArrowVertexes2;
}