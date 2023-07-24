import { Vector } from '../Library/Math/Vector.js';
import { TestError } from './TestError.js';
export function testVectorConstructor() {
    const vector = new Vector(1, 2);
    if (vector.x !== 1 || vector.y !== 2) {
        throw new TestError(`Консткуктор вектора работает не правильно ${vector}`);
    }
}