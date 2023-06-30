import { addVectors } from '../Math/VectorOperations/addVectors'

export function testAddVectors() {
    const vectorSum = addVectors(new Vector(1, 2), new Vector(3, 4))
    if (vectorSum.x !== 4 || vectorSum.y !== 6) {
        throw new Error(`вектора сложились не правильно ${vectorSum}`)
    }
    return true
}