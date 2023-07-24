import {Vector} from '../Library/Math/Vector'
import {TestError} from './TestError'

export function testVectorConstructor() {
    const vector = new Vector(1, 2)

    if (vector.x !== 1 || vector.y !== 2) {
        throw new TestError(`Консткуктор вектора работает не правильно ${vector}`)
    }
}