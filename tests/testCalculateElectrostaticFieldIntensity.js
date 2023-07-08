import {calculateElectrostaticFieldIntensity} from '../Library/Physics/calculateElectrostaticFieldIntensity.js'

export function testCalculateElectrostaticFieldIntensity() {
	const distance = 10
	const electricCharge = 2
	const expectedFieldIntensity = 180000000
	const resultFieldIntensity = calculateElectrostaticFieldIntensity(distance, electricCharge)
	const epsilon = 1e-10
	if (Math.abs(expectedFieldIntensity - resultFieldIntensity) > epsilon) {
		throw new TestError(`Ожидалась интенсивность электрического поля равного ${expectedFieldIntensity}, но он равен ${resultFieldIntensity}`)
	}
	return true
}