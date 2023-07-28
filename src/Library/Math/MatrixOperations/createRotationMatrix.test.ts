import {createRotationMatrix} from "./createRotationMatrix";

test('createRotationMatrix', () => {
    const testAngle = 20
    const expectedMatrix = [
        [0.40808206181339196, -0.9129452507276277],
        [0.9129452507276277, 0.40808206181339196]
    ]
    const resultMatrix = createRotationMatrix(20)
    expect(resultMatrix).toEqual(expectedMatrix)
})