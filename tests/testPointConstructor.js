import { Point } from '../Point.js'

export function testPointConstructor() {
    const point = new Point(1, 2)

    if (point.x !== 1 || point.y !== 2) {
        throw new Error(`Конструктор работает неправильно ${point.x} ${point.y}`)
    }
}