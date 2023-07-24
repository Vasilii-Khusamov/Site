import {Vector} from '../Vector'
import {calculateVectorLength} from './calculateVectorLength'

export function normalizeVector(vector){
	const vectorLength = calculateVectorLength(vector)
	return new Vector(vector.x / vectorLength, vector.y / vectorLength)
}