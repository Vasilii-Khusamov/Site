import {createAxisXArrowVertexes} from '../Library/Draw/createAxisXArrowVertexes'
import {Point} from '../Library/Math/Point'
import {TestError} from './TestError'

export function testCreateAxisXArrowVertexes(){
	const expectedArrowVertexes = [
		new Point(0, 0),
		new Point(100, 0),
		new Point(90, 5),
		new Point(90, -5),
	]
	const resultArrowVertexes = createAxisXArrowVertexes(new Point(0, 50,), new Point(100, 50), {})
	for (let i = 0; i < resultArrowVertexes.length; i++){
		if (expectedArrowVertexes[i].x !== resultArrowVertexes[i].x || expectedArrowVertexes[i].y !== resultArrowVertexes[i].y){
			throw new TestError(`Ожидался массив векторов равный ${expectedArrowVertexes.toString()}, но он равен ${resultArrowVertexes.toString()}`)
		}
	}
	return true
}