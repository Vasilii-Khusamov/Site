import {electrostaticFieldIntensityRatio} from './Constants.js'

/**
 * Формула вычисления напряженности электростатического поля в точке около заряда.
 * Формула потроена на основе закона Кулона и опредиления напряженности.
 * @param {number} distance Расстояние между тестируемой точкой и точечным зарядом (метр).
 * @param {number} electricCharge Значение точечного заряда (Кулон).
 * @return {number} напряженность электростатического поля (Кулон).
 */
export function calculateElectrostaticFieldIntensity(distance, electricCharge) {
	return electrostaticFieldIntensityRatio * electricCharge / (distance * distance)
}