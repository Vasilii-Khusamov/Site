import {Point} from './Point'

test('Point', function () {
    const testPoint = new Point(10, 20)
    expect(testPoint).toEqual({_x: 10, _y: 20})
})