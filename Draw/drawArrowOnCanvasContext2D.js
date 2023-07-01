export function drawArrowOnCanvasContext2D(arrowVertexes, ctx){
	ctx.moveTo(arrowVertexes[0].x, arrowVertexes[0].y)
	ctx.lineTo(arrowVertexes[1].x, arrowVertexes[1].y)
	ctx.lineTo(arrowVertexes[2].x, arrowVertexes[2].y)
	ctx.moveTo(arrowVertexes[1].x, arrowVertexes[1].y)
	ctx.lineTo(arrowVertexes[3].x, arrowVertexes[3].y)
}