import {Point} from '../Library/Math/Point'
import {TestError} from './TestError'

export function testPointConstructor() {
    const point = new Point(1, 2)

    if (point.x !== 1 || point.y !== 2) {
        throw new TestError(`Конструктор работает неправильно ${point.x} ${point.y}`)
    }
    return true
}