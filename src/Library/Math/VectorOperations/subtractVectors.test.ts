import {subtructVectors} from './subtractVectors'
import {Vector} from '../Vector'

test('subtractVectors', function () {
    const resultDifference = subtructVectors(new Vector(1,2), new Vector(3,4))
    const expectedDifference = new Vector(-2, -2)
    expect(resultDifference).toEqual(expectedDifference)
})