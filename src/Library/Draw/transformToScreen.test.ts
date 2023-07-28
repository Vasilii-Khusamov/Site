import {Point} from '../Math/Point'
import {transformToScreen} from './transformToScreen'

test('transformToScreen', () => {
    const canvasStub = {height:  100}
    const testPoint = new Point(10, 10)
    const resultPoint = transformToScreen(testPoint, canvasStub)
    const expectedPoint = new Point(10, 90)

    expect(resultPoint.x).toBe(expectedPoint.x)
    expect(resultPoint.y).toBe(expectedPoint.y)
})