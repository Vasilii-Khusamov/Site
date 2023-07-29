import {Vector} from '../Vector'
import {addVectors} from './addVectors'

test('addVectors', function () {
    const expectedSum = new Vector(4, 6)
    const resultSum = addVectors(new Vector(1, 2), new Vector(3, 4))
    expect(resultSum).toEqual(expectedSum)
})