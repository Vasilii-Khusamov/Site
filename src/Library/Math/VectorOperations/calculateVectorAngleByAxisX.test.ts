import {calculateVectorAngleByAxisX} from './calculateVectorAngleByAxisX'
import {Vector} from '../Vector'

test('calculateVectorAngleByAxisX', function () {
    const resultAngle = calculateVectorAngleByAxisX(new Vector(1, 0))
    const expectedAngle = 0
    expect(resultAngle).toEqual(expectedAngle)
})