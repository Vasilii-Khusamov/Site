import {transformToScreen} from '../../Library/Draw/transformToScreen.js'
import {Point} from '../../Library/Math/Point.js'

export function drawCircle(x, y, radius, scale, canvasElement) {
	const ctx = canvasElement.getContext('2d')
	const point = transformToScreen(new Point(x * scale, y * scale), canvasElement)
	ctx.beginPath()
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false)
	ctx.fill()
	ctx.stroke()
}