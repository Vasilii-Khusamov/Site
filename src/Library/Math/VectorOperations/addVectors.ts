import {Vector} from '../Vector'

export function addVectors(vector1, vector2) {
    return new Vector(vector1.x + vector2.x, vector1.y + vector2.y)
}