import { calculateVectorLength } from '../Math/VectorOperations/calculateVectorLength.js';
import { multiplyVectorByNumber } from '../Math/VectorOperations/multiplyVectorByNumber.js';
import { normalizeVector } from '../Math/VectorOperations/normalizeVector.js';
import { subtructVectors } from '../Math/VectorOperations/subtractVectors.js';
import { calculateElectrostaticFieldIntensity } from './calculateElectrostaticFieldIntensity.js';
/**
 * Формула вычисления напряженности электростатического поля в точке около заряда в векторной форме.
 * Формула потроена на основе закона Кулона и опредиления напряженности.
 * @param {number} electricCharge
 * @param {import('../Math/Vector')} electricChargePosition
 * @param {import('../Math/Vector')} testPointPosition
 * @returns {import('../Math/Vector')}
 */
export function calculateElectrostaticFieldIntensityVector(electricCharge, electricChargePosition, testPointPosition) {
    const distance = calculateVectorLength(subtructVectors(testPointPosition, electricChargePosition));
    const normalisedIntensityVector = normalizeVector(subtructVectors(testPointPosition, electricChargePosition));
    return (multiplyVectorByNumber(normalisedIntensityVector, calculateElectrostaticFieldIntensity(distance, electricCharge)));
}