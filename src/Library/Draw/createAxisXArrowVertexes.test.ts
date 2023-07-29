import {createAxisXArrowVertexes} from './createAxisXArrowVertexes'
import {Point} from '../Math/Point'

test('createAxisXArrowVertexes', function () {
    const expectedArrowVertexes = [
        new Point(0, 0),
        new Point(100, 0),
        new Point(90, 5),
        new Point(90, -5),
    ]
    const resultArrowVertexes = createAxisXArrowVertexes(
        new Point(0, 50),
        new Point(100, 50),
        {}
    )
    expect(resultArrowVertexes.length).toBe(4)
    for (let i = 0; i < resultArrowVertexes.length; i++) {
        expect(resultArrowVertexes[i].x).toBe(expectedArrowVertexes[i].x)
        expect(resultArrowVertexes[i].y).toBe(expectedArrowVertexes[i].y)
    }
})