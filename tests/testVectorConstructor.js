import { Vector } from '../Math/Vector.js'

export function testVectorConstructor() {
    const vector = new Vector(1, 2)

    if (vector.x !== 1 || vector.y !== 2) {
        throw new Error(`Консткуктор вектора работает не правильно ${vector}`)
    }
}