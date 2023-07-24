import {drawCircle} from './drawCircle'
import {cameraHeight, electricChargeSize} from './Consts'

export function drawElectricChargeArray(electricChargeArray, canvasElement, ctx) {

	const ratio = canvasElement.width / canvasElement.height
	const cameraWidth = cameraHeight * ratio

	// Конвертация координат в метрах в координаты в пикселах экрана.
	const convertToScreen = canvasElement.height / cameraHeight

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
				canvasElement
			)
		} else {
			ctx.fillStyle = 'blue'
			ctx.strokeStyle = 'darkblue'

			drawCircle(
				electricChargeArray[i].positionInMeters.x,
				electricChargeArray[i].positionInMeters.y,
				electricChargeSize,
				convertToScreen,
				canvasElement
			)
		}
	}
}