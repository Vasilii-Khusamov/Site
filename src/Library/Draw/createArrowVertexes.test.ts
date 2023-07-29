import {Point} from '../Math/Point'
import {Vector} from '../Math/Vector'
import {createArrowVertexes} from './createArrowVertexes'

test('createArrowVertexes', function () {
    const expectedArrowVertexes = [
        new Point(50, 0),
        new Point(50, 100),
        new Point(55, 90),
        new Point(45, 90),
    ]
    const normalizedArrowVertexes = [
        new Vector(0, 0),
        new Vector(100, 0),
        new Vector(90, -5),
        new Vector(90, 5),
    ]
    const resultArrowVertexes = createArrowVertexes(new Point(50, 0), new Point(50, 100), normalizedArrowVertexes)
    const epsilon = 1e-10
    for (let i = 0; i < resultArrowVertexes.length; i++) {
        expect(Math.abs(resultArrowVertexes[i].x - expectedArrowVertexes[i].x)).toBeLessThan(epsilon)
        expect(Math.abs(resultArrowVertexes[i].y - expectedArrowVertexes[i].y)).toBeLessThan(epsilon)
    }
})