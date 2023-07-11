import {Point} from '../../Library/Math/Point.js'
import {calculateDistanceBetweenPoints} from '../../Library/Math/PointOperations/calculateDistanceBetweenPoints.js'
import {Vector} from '../../Library/Math/Vector.js'
import {addVectors} from '../../Library/Math/VectorOperations/addVectors.js'
import {
	calculateElectrostaticFieldIntensityVector
} from '../../Library/Physics/calculateElectrostaticFieldIntensityVector.js'
import {epsilon, gridStepInMeters, cameraHeight} from './Consts.js'

export function calculateIntensityVectorArray(electricChargeArray) {

	const example = document.querySelector('#example canvas')
	const ctx = example.getContext('2d')

	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	const ratio = example.width / example.height
	const cameraWidth = cameraHeight * ratio

	// Конвертация координат в метрах в координаты в пикселах экрана.
	const convertToScreen = example.height / cameraHeight

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
	return intensityVectorArray
}