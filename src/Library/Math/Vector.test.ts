import {Vector} from "./Vector";

test('Vector', function () {
    const testVector = new Vector(10, 20)
    expect(testVector).toEqual({_x: 10, _y: 20})
})