import {Vector} from '../Vector'

export function multiplyVectorByNumber(vector, number){
	return new Vector(vector.x * number, vector.y * number)
}