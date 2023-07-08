import {drawArrow} from '../../Library/Draw/drawArrow.js'
import {drawArrowOnCanvasContext2D} from '../../Library/Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from '../../Library/Draw/transformToScreen.js'
import {Point} from '../../Library/Math/Point.js'
import {Vector} from '../../Library/Math/Vector.js'

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

for (let i = 0; i < charge.length; i++) {
	if (charge[i] > 0) {
		ctx.fillStyle = 'red'
		ctx.strokeStyle = 'darkred'
		drawCircle(chargePosition[i].x, chargePosition[i].y, chargeSize, scale, example)
	} else {
		ctx.fillStyle = 'blue'
		ctx.strokeStyle = 'darkblue'
		drawCircle(chargePosition[i].x, chargePosition[i].y, chargeSize, scale, example)
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

function drawCircle(x, y, radius, scale, canvasElement) {
	const ctx = canvasElement.getContext('2d')
	const point = transformToScreen(new Point(x * scale, y * scale), canvasElement)
	ctx.beginPath()
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false)
	ctx.fill()
	ctx.stroke()
}