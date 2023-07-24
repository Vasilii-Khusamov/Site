/**
 * Угол между двумя векторами.
 * Угол отсчитывается от вектора vector1 против часовой стрелки до вектора vector2.
 * Может быть отрицательным, то есть может принимать значения от -Math.PI до Math.PI.
 * @param {Vector} vector1
 * @param {Vector} vector2
 * @returns
 */
export function calculateVectorAngle(vector1, vector2) {
    return Math.atan2(vector1.x * vector2.y - vector2.x * vector1.y, vector1.x * vector2.x + vector1.y * vector2.y);
}