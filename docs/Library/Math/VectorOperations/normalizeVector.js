import { Vector } from '../Vector.js';
import { calculateVectorLength } from './calculateVectorLength.js';
export function normalizeVector(vector) {
    const vectorLength = calculateVectorLength(vector);
    return new Vector(vector.x / vectorLength, vector.y / vectorLength);
}