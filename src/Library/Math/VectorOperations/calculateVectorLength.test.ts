import {calculateVectorLength} from './calculateVectorLength'
import {Vector} from '../Vector'

test('calculateVectorLength', function () {
    const resultLength = calculateVectorLength(new Vector(1, 2))
    const expectedLength = Math.sqrt(5)
    expect(resultLength).toEqual(expectedLength)
})