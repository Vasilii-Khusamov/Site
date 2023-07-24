import {Vector} from '../Math/Vector.js';
import {Point} from '../Math/Point.js';
import {calculateDistanceBetweenPoints} from '../Math/PointOperations/calculateDistanceBetweenPoints.js';

/**
 * Высота головы стрелки по умолчанию.
 */
const headArrowDefaultHeight = 10

/**
 * Ширина головы стрелки по умолчанию.
 */
const headArrowDefaultWidth = 10

/**
 * @param {Point} point1 Начало стрелки.
 * @param {Point} point2 Конец стрелки (конец это где рисуется голова стрелки).
 * @param options
 * @param {Number} options.headArrowHeight
 * @param {Number} options.headArrowWidth
 */
export function createAxisXArrowVertexes(point1, point2, options){
	const {
		headArrowWidth: headArrowWidth = headArrowDefaultWidth,
		headArrowHeight: headArrowHeight = headArrowDefaultHeight} = options
	const arrowLength = calculateDistanceBetweenPoints(point1, point2)
	const result = [new Vector(0, 0)]
	result.push(new Vector(arrowLength, 0))
	result.push(new Vector(arrowLength - headArrowHeight, headArrowWidth / 2))
	result.push(new Vector(arrowLength - headArrowHeight, -headArrowWidth / 2))
	return result
}