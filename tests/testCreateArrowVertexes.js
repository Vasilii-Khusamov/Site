import {createArrowVertexes} from '../Draw/createArrowVertexes.js'
import {createAxisXArrowVertexes} from '../Draw/createAxisXArrowVertexes.js';
import {Vector} from '../Math/Vector.js'
import {Point} from '../Point.js';
import {TestError} from './TestError.js';

export function testCreateArrowVertexes(){

	const expectedArrowVertexes = [
		new Point(50, 0),
		new Point(50, 100),
		new Point(55, 90),
		new Point(45, 90),
	]

	const normalizedArrowVertexes = [
		new Vector(0, 0),
		new Vector(100, 0),
		new Vector(90, -5),
		new Vector(90, 5),
	]
	const resultArrowVertexes = createArrowVertexes(new Point(50, 0), new Point(50, 100), normalizedArrowVertexes)

	const epsilon = 1e-10
	for (let i = 0; i < resultArrowVertexes.length; i++){
		if (
			Math.abs(expectedArrowVertexes[i].x - resultArrowVertexes[i].x) > epsilon ||
			Math.abs(expectedArrowVertexes[i].y - resultArrowVertexes[i].y) > epsilon
		) {
			const vectorToString = vector => `(${vector.x}, ${vector.y})`

			throw new TestError(
				`Ожидался массив векторов равный ${expectedArrowVertexes.map(vectorToString)}, 
			но он равен ${resultArrowVertexes.map(vectorToString)}`
			)
		}
	}
	return true
}