import {drawArrow} from '../../Library/Draw/drawArrow.ts'
import {drawArrowOnCanvasContext2D} from '../../Library/Draw/drawArrowOnCanvasContext2D.js'
import {transformToScreen} from '../../Library/Draw/transformToScreen.js'
import {Point} from '../../Library/Math/Point.js'
import {calculateVectorLength} from '../../Library/Math/VectorOperations/calculateVectorLength.js'
import {multiplyVectorByNumber} from '../../Library/Math/VectorOperations/multiplyVectorByNumber.js'
import {normalizeVector} from '../../Library/Math/VectorOperations/normalizeVector.js'
import {calculateElectrostaticFieldIntensity} from '../../Library/Physics/calculateElectrostaticFieldIntensity.js'
import {drawGridPoint} from './drawGridPoint.js'
import {cameraHeight, gridStepInMeters, arrowLengthPx, epsilon, electrostaticDrawDistance} from './Consts.js'
import {map} from './map.js'

export function drawIntensityVectorArray(intensityVectorArray, canvasElement, ctx) {

	const ratio = canvasElement.width / canvasElement.height
	const cameraWidth = cameraHeight * ratio

	// Конвертация координат в метрах в координаты в пикселах экрана.
	const convertToScreen = canvasElement.height / cameraHeight

	// Отрисовка сетки с тестовыми точками.
	for (let y = 0; y < cameraHeight; y += gridStepInMeters) {
		for (let x = 0; x < cameraWidth; x += gridStepInMeters) {
			ctx.beginPath()
			ctx.fillStyle = `hsl(0, 0%, 85%)`
			drawGridPoint(x, y, convertToScreen, canvasElement)
		}
	}

	/**
	 *	 Рисование стрелок на основе данных из intensityVectorArray
	 */
	const minValueIntensity = calculateElectrostaticFieldIntensity(electrostaticDrawDistance, 1)
	const maxValueIntensity = calculateElectrostaticFieldIntensity(1, 1)

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

			drawArrow(
				transformToScreen(
					new Point(
						intensityVectorArray[i].position.x * convertToScreen,
						intensityVectorArray[i].position.y * convertToScreen
					),
					canvasElement
				),
				transformToScreen(
					new Point(
						intensityVectorArray[i].position.x * convertToScreen + direction.x,
						intensityVectorArray[i].position.y * convertToScreen + direction.y
					),
					canvasElement
				),
				{
					headArrowWidth: 10,
					headArrowHeight: 10,
					draw: (arrowVertexes) => drawArrowOnCanvasContext2D(arrowVertexes, ctx)
				}
			)
		}
	}
}