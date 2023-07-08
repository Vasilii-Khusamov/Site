import {drawArrow} from './Draw/drawArrow.js'
import {drawArrowOnCanvasContext2D} from './Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from './Draw/transformToScreen.js'
import {Point} from './Math/Point.js'
import {Vector} from './Math/Vector.js'

// ctx.fillRect(x,y,1,1) // fill in the pixel at x, y

var example = document.querySelector('#example canvas')
let ctx = example.getContext('2d')

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const scale = 100
const gridStepInMeters = 1

const charge = [2, -1, 5]
const chargePosition = [new Vector(1, 1), new Vector(5, 5), new Vector(1, 5)]
const chargeSize = 10 //px

const scaleText = document.getElementById('scale')
scaleText.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'

for (let y = 0; y < example.height / (scale * gridStepInMeters); y += gridStepInMeters) {
	for (let x = 0; x < example.width / (scale * gridStepInMeters); x += gridStepInMeters) {
		drawGridPoint(x, y, scale, example)
	}
}

function drawGridPoint(x, y, scale, canvasElement) {

	let ctx = canvasElement.getContext('2d')
	const point = transformToScreen(new Point(x * scale, y * scale), canvasElement)
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