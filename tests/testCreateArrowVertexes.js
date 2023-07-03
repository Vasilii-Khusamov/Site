import {createArrowVertexes} from '../Draw/createArrowVertexes.js'
import {createAxisXArrowVertexes} from '../Draw/createAxisXArrowVertexes.js';
import {Vector} from '../Math/Vector.js'
import {Point} from '../Point.js';
import {TestError} from './TestError.js';

export function testCreateArrowVertexes(){

	const expectedArrowVertexes = [
		new Point(0, 50),
		new Point(100, 50),
		new Point(90, 55),
		new Point(90, 45),
	]
	const normalizedArrowVertexes = createAxisXArrowVertexes(new Point(0, 50), new Point(100, 50), {})
	const resultArrowVertexes = createArrowVertexes(new Vector(0, 50), new Vector(100, 50), normalizedArrowVertexes)
	for (let i = 0; i < resultArrowVertexes.length; i++){
		if (expectedArrowVertexes[i].x !== resultArrowVertexes[i].x || expectedArrowVertexes[i].y !== resultArrowVertexes[i].y) {
			const vectorToString = vector => `(${vector.x}, ${vector.y})`
			throw new TestError(`Ожидался массив векторов равный ${expectedArrowVertexes.map(vectorToString)}, но он равен ${resultArrowVertexes.map(vectorToString)}`)
		}
	}
	return true
}