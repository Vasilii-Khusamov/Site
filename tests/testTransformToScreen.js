import {transformToScreen} from '../Draw/transformToScreen.js'
import {Point} from '../Point.js'
import {TestError} from './TestError.js'

export function testTransformToScreen() {
	const canvasStub = {height:  100}
	const testPoint = new Point(10, 10)
	const resultPoint = transformToScreen(testPoint, canvasStub)
	const expectedPoint = new Point(10, 90)

	if (resultPoint.x !== expectedPoint.x || resultPoint.y !== expectedPoint.y) {
		throw new TestError(`Ожидалась точка равная (${expectedPoint.x}, ${expectedPoint.y}), но она равна (${resultPoint.x}, ${resultPoint.y})`)
	}
	return true
}