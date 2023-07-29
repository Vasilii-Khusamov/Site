import {calculateVectorAngle} from './calculateVectorAngle'
import {Vector} from '../Vector'

test('calculateVectorAngle', function () {
    const resultAngle = calculateVectorAngle(new Vector(0, 1), new Vector(1, 0))
    const expectedAngle = -Math.PI / 2
    expect(resultAngle).toEqual(expectedAngle)
})