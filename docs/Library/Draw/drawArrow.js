import { createArrowVertexes } from './createArrowVertexes.js';
import { createAxisXArrowVertexes } from './createAxisXArrowVertexes.js';
/**
 * Высота головы стрелки по умолчанию.
 */
const headArrowDefaultHeight = 10;
/**
 * Ширина головы стрелки по умолчанию.
 */
const headArrowDefaultWidth = 10;
/**
 * @param {Point} point1 Начало стрелки.
 * @param {Point} point2 Конец стрелки (конец это где рисуется голова стрелки).
 * @param options
 * @param {Number} options.headArrowHeight
 * @param {Number} options.headArrowWidth
 * @param {Function} options.draw
 */
export function drawArrow(point1, point2, options) {
    const { draw } = options;
    // Создаем стрелку на оси Х.
    const normalizedArrowVertexes = createAxisXArrowVertexes(point1, point2, options);
    // Создаем стрелку уже на своем месте.
    const arrowVertexes = createArrowVertexes(point1, point2, normalizedArrowVertexes);
    // Рисуем стрелку.
    draw(arrowVertexes);
}