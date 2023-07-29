import {calculateElectrostaticFieldIntensity} from './calculateElectrostaticFieldIntensity'

test('calculateElectrostaticFieldIntensity', function () {
    const expectedFieldIntensity = 180000000
    const resultFieldIntensity = calculateElectrostaticFieldIntensity(10, 2)
    expect(resultFieldIntensity).toEqual(expectedFieldIntensity)
})