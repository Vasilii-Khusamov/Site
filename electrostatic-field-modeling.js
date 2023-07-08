import {drawArrow} from './Draw/drawArrow.js'
import {drawArrowOnCanvasContext2D} from './Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from './Draw/transformToScreen.js'
import {Point} from './Math/Point.js'

// ctx.fillRect(x,y,1,1) // fill in the pixel at x, y

var example = document.querySelector('#example canvas')
let ctx = example.getContext('2d')

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const scale = 100
const gridStepInMeters = 1

const scaleText = document.getElementById('scale')
scaleText.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'

for (let y = 0; y < example.height / (scale * gridStepInMeters); y++) {
	for (let x = 0; x < example.width / (scale * gridStepInMeters); x++) {
		const point = transformToScreen(new Point(x * scale * gridStepInMeters, y * scale * gridStepInMeters), example)
		ctx.fillRect(
			point.x,
			point.y,
			1,1)

		ctx.fillRect(
			point.x + 1,
			point.y,
			1,1)
		ctx.fillRect(
			point.x - 1,
			point.y,
			1,1)
		ctx.fillRect(
			point.x,
			point.y + 1,
			1,1)
		ctx.fillRect(
			point.x,
			point.y - 1,
			1,1)
	}
}
