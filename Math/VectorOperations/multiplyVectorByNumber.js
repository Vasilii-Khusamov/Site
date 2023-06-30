import {Vector} from '../Vector.js';

export function multiplyVectorByNumber(vector, number){
	return new Vector(vector.x * number, vector.y * number)
}