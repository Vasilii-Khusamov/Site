import {Vector} from '../../Library/Math/Vector'
import {calculateIntensityVectorArray} from './calculateIntensityVectorArray'
import {gridStepInMeters} from './Consts'
import {drawElectricChargeArray} from './drawElectricChargeArray'
import {drawIntensityVectorArray} from './drawIntensityVectorArray'

// Входные параметры.
/**
 * Массив зарядов.
 * @type {[{positionInMeters: Vector, value: number},{positionInMeters: Vector, value: number}]}
 */
const electricChargeArray = [
	{
		value: 1,
		positionInMeters: new Vector(5, 5)
	},
	{
		value: 1,
		positionInMeters: new Vector(8, 5)
	}
]

/**
 * Основные вычисления.
  */
const intensityVectorArray = calculateIntensityVectorArray(electricChargeArray)

/**
 * Отрисовка результов на экране.
 * @type {Element}
 */
const canvasElement = document.querySelector('#example canvas')
if (!(canvasElement instanceof HTMLCanvasElement)) {
	throw new Error('Ожидался HTMLCanvasElement')
}
const ctx = canvasElement.getContext('2d')

drawIntensityVectorArray(intensityVectorArray, canvasElement, ctx)
drawElectricChargeArray(electricChargeArray, canvasElement, ctx)

/**
 * Элемент текста который показывает масштаб сетки.
 * @type {HTMLElement}
 */
const scaleTextElement = document.getElementById('scale')
scaleTextElement.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'