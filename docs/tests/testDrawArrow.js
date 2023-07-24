import { drawArrow } from '../Library/Draw/drawArrow.js';
import { drawArrowOnCanvasContext2D } from '../Library/Draw/drawArrowOnCanvasContext2D.js';
import { Point } from '../Library/Math/Point.js';
import { TestError } from './TestError.js';
const expectedImageData = Uint8ClampedArray.from([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127,
    0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 163, 0, 0, 0, 226, 0, 0, 0, 236, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0,
    127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 163, 0, 0, 0, 226, 0, 0, 0, 236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]);
export function testDrawArrow() {
    const arrowStartPoint = new Point(0, 5);
    const arrowEndPoint = new Point(10, 5);
    const arrowHeadWidth = 2;
    const arrowHeadHeight = 2;
    const canvasElement = document.createElement('canvas');
    canvasElement.width = 10;
    canvasElement.height = 10;
    document.body.appendChild(canvasElement);
    const ctx = canvasElement.getContext('2d');
    drawArrow(arrowStartPoint, arrowEndPoint, {
        headArrowHeight: arrowHeadHeight,
        headArrowWidth: arrowHeadWidth,
        draw: (arrowVertexes) => drawArrowOnCanvasContext2D(arrowVertexes, ctx)
    });
    const resultImageData = ctx.getImageData(0, 0, 10, 10).data;
    document.body.removeChild(canvasElement);
    for (let i = 0; i < resultImageData.length; i++) {
        if (resultImageData[i] !== expectedImageData[i]) {
            throw new TestError('Функция отрисовки стрелки работает не правильно');
        }
    }
    return true;
}