import {normalizeVector} from './normalizeVector'
import {Vector} from '../Vector'

test('normalizeVector', function () {
    const resultVector = normalizeVector(new Vector(1, 2))
    const expectedVector = new Vector(0.4472135954999579, 0.8944271909999159)
    expect(resultVector).toEqual(expectedVector)
})