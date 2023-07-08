import {drawArrow} from '../../Library/Draw/drawArrow.js'
import {drawArrowOnCanvasContext2D} from '../../Library/Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from '../../Library/Draw/transformToScreen.js'
import {Point} from '../../Library/Math/Point.js'
import {Vector} from '../../Library/Math/Vector.js'
import {addVectors} from '../../Library/Math/VectorOperations/addVectors.js'
import {calculateVectorAngleByAxisX} from '../../Library/Math/VectorOperations/calculateVectorAngleByAxisX.js'
import {calculateVectorLength} from '../../Library/Math/VectorOperations/calculateVectorLength.js'
import {multiplyVectorByNumber} from '../../Library/Math/VectorOperations/multiplyVectorByNumber.js'
import {normalizeVector} from '../../Library/Math/VectorOperations/normalizeVector.js'
import {
	calculateElectrostaticFieldIntensityVector
} from '../../Library/Physics/calculateElectrostaticFieldIntensityVector.js'

// ctx.fillRect(x,y,1,1) // fill in the pixel at x, y

var example = document.querySelector('#example canvas')
let ctx = example.getContext('2d')

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const scale = 100
const gridStepInMeters = .5

const charge = [1, 1]
const chargePosition = [new Vector(5, 4), new Vector(15, 4)]
const chargeSize = 10 //px

const arrowScale = 0.5
const arrowLenghPx = (arrowScale * gridStepInMeters) * scale

const scaleText = document.getElementById('scale')
scaleText.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'

for (let y = 0; y < example.height / (scale * gridStepInMeters); y += gridStepInMeters) {
	for (let x = 0; x < example.width / (scale * gridStepInMeters); x += gridStepInMeters) {

		drawGridPoint(x, y, scale, example)

		const epsilon = 1e-6
		let IntensityVector = new Vector(0, 0)

		for (let i = 0; i < charge.length; i++) {
			IntensityVector = addVectors(
				IntensityVector,
				calculateElectrostaticFieldIntensityVector(
					charge[i],
					chargePosition[i],
					new Vector(x, y)
				)
			)
		}

		if (calculateVectorLength(IntensityVector) > epsilon) {
			const direction = multiplyVectorByNumber(normalizeVector(IntensityVector), arrowLenghPx)
			drawArrow(
				transformToScreen(
					new Point(x * scale, y * scale),
					example
				),
				transformToScreen(
					new Point(x * scale + direction.x, y * scale + direction.y),
					example
				),
				{
					headArrowHeight: 10,
					headArrowWidth: 10,
					draw: (arrowVertexes) => drawArrowOnCanvasContext2D(arrowVertexes, ctx)
				}
			)
		}
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