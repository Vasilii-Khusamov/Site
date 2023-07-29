import {multiplyVectorByNumber} from './multiplyVectorByNumber'
import {Vector} from '../Vector'

test('multiplyVectorByNumber', function () {
    const resultVector = multiplyVectorByNumber(new Vector(1, 2), 2)
    const expectedVector = new Vector(2, 4)
    expect(resultVector).toEqual(expectedVector)
})