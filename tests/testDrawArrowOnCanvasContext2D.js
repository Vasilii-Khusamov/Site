import {drawArrowOnCanvasContext2D} from '../Library/Draw/drawArrowOnCanvasContext2D.js';
import {Vector} from '../Library/Math/Vector.js';
import {TestError} from './TestError.js';

const expectedArray = [
	0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 75, 0, 0, 0, 71, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 255, 0, 0, 0, 215, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 0, 0, 0, 215, 0, 0, 0, 255, 0, 0, 0, 168,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 0
];

export function testDrawArrowOnCanvasContext2D() {
	const canvasElement = document.createElement('canvas');
	canvasElement.width = 10;
	canvasElement.height = 10;
	document.body.appendChild(canvasElement);
	const ctx = canvasElement.getContext('2d');
	const arrowVertexes = [
		new Vector(0, 0),
		new Vector(9, 9),
		new Vector(8, 7),
		new Vector(7, 8)
	];
	drawArrowOnCanvasContext2D(arrowVertexes, ctx);
	const result = Uint8ClampedArray.from(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data);
	const expected = Uint8ClampedArray.from(expectedArray);

	for (let i = 0; i < result.length; i++) {
		if (result[i] !== expected[i]) {
			throw new TestError(`Функция рисует не правильно`);
		}
	}
	document.body.removeChild(canvasElement);
	return true;
}