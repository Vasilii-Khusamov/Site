import {Point} from '../Math/Point.js'

/**
 * Трансформация точек перед отображением на холсте.
 * Переворачиваем изображение по вертикали и смещаем вниз на высоту холста.
 * @param {Point} point
 * @returns
 */
export function transformToScreen(point, canvas) {
	return new Point(point.x, -point.y + canvas.height)
}