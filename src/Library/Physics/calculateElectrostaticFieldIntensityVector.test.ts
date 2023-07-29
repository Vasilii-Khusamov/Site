import {Vector} from '../Math/Vector'
import {calculateElectrostaticFieldIntensityVector} from './calculateElectrostaticFieldIntensityVector'

test('calculateElectrostaticFieldIntensityVector', function () {
    const testPoint = new Vector(10, 0)
    const electricChargePosition = new Vector(0, 0)
    const electricChargeValue = 2
    const resultElectrostaticFieldIntensityVector = calculateElectrostaticFieldIntensityVector(
        electricChargeValue,
        electricChargePosition,
        testPoint
    )
    const expectedElectrostaticFieldIntensityVector = new Vector(180000000, 0)
    expect(resultElectrostaticFieldIntensityVector).toEqual(expectedElectrostaticFieldIntensityVector)
})