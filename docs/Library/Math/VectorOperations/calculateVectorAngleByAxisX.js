/**
 * Угол между вектором и осью Х.
 * Угол отсчитывается от оси Х против часовой стрелки до вектора.
 * Может быть отрицательным, то есть может принимать значения от -Math.PI до Math.PI.
 * @param {Vector} vector
 * @returns
 */
export function calculateVectorAngleByAxisX(vector) {
    return Math.atan2(vector.y, vector.x);
}