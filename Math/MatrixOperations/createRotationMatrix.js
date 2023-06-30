export function createRotationMatrix(angle){
	const cos = Math.cos(angle)
	const sin = Math.sin(angle)
	return [
		[cos, -sin],
		[sin, cos]
	]
}