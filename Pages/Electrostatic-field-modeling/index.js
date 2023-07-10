import {drawArrow} from '../../Library/Draw/drawArrow.js'
import {drawArrowOnCanvasContext2D} from '../../Library/Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from '../../Library/Draw/transformToScreen.js'
import {Point} from '../../Library/Math/Point.js'
import {Vector} from '../../Library/Math/Vector.js'
import {addVectors} from '../../Library/Math/VectorOperations/addVectors.js'
import {calculateVectorLength} from '../../Library/Math/VectorOperations/calculateVectorLength.js'
import {multiplyVectorByNumber} from '../../Library/Math/VectorOperations/multiplyVectorByNumber.js'
import {normalizeVector} from '../../Library/Math/VectorOperations/normalizeVector.js'
import {
	calculateElectrostaticFieldIntensityVector
} from '../../Library/Physics/calculateElectrostaticFieldIntensityVector.js'
import {drawCircle} from './drawCircle.js'
import {drawGridPoint} from './drawGridPoint.js'
import {calculateDistanceBetweenPoints} from '../../Library/Math/PointOperations/calculateDistanceBetweenPoints.js'
function map(x, in_min, in_max, out_min, out_max)  {
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


// const electricChargeArray = [{}]
// const constants = {}
// const intensityVectorArray = calculateIntensityVectorArray(electricChargeArray, constants)
// drawIntensityVectorArray(intensityVectorArray, document, window)
// drawElectricChargeArray(electricChargeArray)





// Входные параметры.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// document
// window


/**
 * Массив зарядов.
 * @type {[{positionInMeters: Vector, value: number},{positionInMeters: Vector, value: number}]}
 */
const electricChargeArray = [
	{
		value: 1,
		positionInMeters: new Vector(5, 5)
	},
	{
		value: 1,
		positionInMeters: new Vector(6, 6)
	}
]




// Константы.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const gridStepInMeters = 0.5

const epsilon = 1e-6

const cameraHeight = 10

// Длина стрелки в пикселях.
// const arrowLengthPx = (gridStepInMeters / 2) * scale
const arrowLengthPx = 15

const electricChargeSize = 10



// Подготовка к вычислениям.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


const example = document.querySelector('#example canvas')
const ctx = example.getContext('2d')

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const ratio = example.width / example.height
const cameraWidth = cameraHeight * ratio

// Конвертация координат в метрах в координаты в пикселах экрана.
const convertToScreen = example.height / cameraHeight




// Основные вычисления.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Вычисляем массив точек, в которых надо рассчитать напряженность поля.
const testPoints = []
for (let y = 0; y < cameraHeight; y += gridStepInMeters) {
	for (let x = 0; x < cameraWidth; x += gridStepInMeters) {
		const point = new Point(x, y)
		const dist = calculateDistanceBetweenPoints
		// Если точка не совпала ни с одним из зарядом, то помещаем ее в массив gridPoints.
		if (electricChargeArray.reduce((result, charge) => result && dist(charge.positionInMeters, point) > epsilon, true)) {
			testPoints.push(point)
		}
	}
}


/**
 * Массив векторной напряжёности в каждой точке сетки.
 * @type {{intensityVector: Vector, position: Vector}[]}
 */
const intensityVectorArray = []
// Вычисление векторной напряжёности в каждой точке сетки.
for (const {x, y} of testPoints) {
	let intensityVector = new Vector(0, 0)

	for (let i = 0; i < electricChargeArray.length; i++) {
		intensityVector = addVectors(
			intensityVector,
			calculateElectrostaticFieldIntensityVector(
				electricChargeArray[i].value,
				electricChargeArray[i].positionInMeters,
				new Vector(x, y)
			)
		)
	}

	intensityVectorArray.push({intensityVector: intensityVector, position: new Vector(x, y)})
}




// Отрисовка результов на экране.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Отрисовка сетки с тестовыми точками.
for (let y = 0; y < cameraHeight; y += gridStepInMeters) {
	for (let x = 0; x < cameraWidth; x += gridStepInMeters) {
		ctx.beginPath()
		ctx.fillStyle = `hsl(268, 100%, 90%)`
		drawGridPoint(x, y, convertToScreen, example)
	}
}

/**
 *	 Рисование стрелок на основе данных из intensityVectorArray
 */
const minValueIntensity = Math.min(...intensityVectorArray.map(item => calculateVectorLength(item.intensityVector)))
const maxValueIntensity = Math.max(...intensityVectorArray.map(item => calculateVectorLength(item.intensityVector)))
for (let i = 0; i < intensityVectorArray.length; i++) {
	const intensity = calculateVectorLength(intensityVectorArray[i].intensityVector)
	if (intensity > epsilon) {

		ctx.beginPath()

		const direction = multiplyVectorByNumber(
			normalizeVector(intensityVectorArray[i].intensityVector),
			arrowLengthPx
		)

		let color = 0
		// const middleValueIntensity = (maxValueIntensity + minValueIntensity) / 2
		// if (intensity < middleValueIntensity) {
		// 	color = Math.round(map(intensity, minValueIntensity, middleValueIntensity, 255, 0))
		// }

		color = Math.round(map(intensity, minValueIntensity, maxValueIntensity, 255, 0))

		ctx.strokeStyle = `rgb(${color}, ${color}, ${color})`
		//ctx.strokeStyle = `hsl(${color}, 100%, 50%)`
		// console.log(color, Math.round(intensity), Math.round(minValueIntensity), Math.round(middleValueIntensity), Math.round(maxValueIntensity), intensityVectorArray[i].position)

		drawArrow(
			transformToScreen(
				new Point(
					intensityVectorArray[i].position.x * convertToScreen,
					intensityVectorArray[i].position.y * convertToScreen
				),
				example
			),
			transformToScreen(
				new Point(
					intensityVectorArray[i].position.x * convertToScreen + direction.x,
					intensityVectorArray[i].position.y * convertToScreen + direction.y
				),
				example
			),
			{
				headArrowWidth: 10,
				headArrowHeight: 10,
				draw: (arrowVertexes) => drawArrowOnCanvasContext2D(arrowVertexes, ctx)
			}
		)
	}
}

/**
 * Рисование всех зарядов
 */
for (let i = 0; i < electricChargeArray.length; i++) {
	if (electricChargeArray[i].value > 0) {
		ctx.fillStyle = 'red'
		ctx.strokeStyle = 'darkred'

		drawCircle(
			electricChargeArray[i].positionInMeters.x,
			electricChargeArray[i].positionInMeters.y,
			electricChargeSize,
			convertToScreen,
			example
		)
	} else {
		ctx.fillStyle = 'blue'
		ctx.strokeStyle = 'darkblue'

		drawCircle(
			electricChargeArray[i].positionInMeters.x,
			electricChargeArray[i].positionInMeters.y,
			electricChargeSize,
			convertToScreen,
			example
		)
	}
}


/**
 * Элемент текста который показывает масштаб сетки.
 * @type {HTMLElement}
 */
const scaleTextElement = document.getElementById('scale')
scaleTextElement.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'