import {transformToScreen} from '../../Library/Draw/transformToScreen'
import {Point} from '../../Library/Math/Point'

export function drawGridPoint(x, y, scale, canvasElement) {

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