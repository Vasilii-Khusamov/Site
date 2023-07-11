import {Vector} from '../../Library/Math/Vector.js'
import {calculateIntensityVectorArray} from './calculateIntensityVectorArray.js'
import {gridStepInMeters} from './Consts.js'
import {drawElectricChargeArray} from './drawElectricChargeArray.js'
import {drawIntensityVectorArray} from './drawIntensityVectorArray.js'

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
		positionInMeters: new Vector(6, 6)
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
const ctx = canvasElement.getContext('2d')

drawIntensityVectorArray(intensityVectorArray, canvasElement, ctx)
drawElectricChargeArray(electricChargeArray, canvasElement, ctx)

/**
 * Элемент текста который показывает масштаб сетки.
 * @type {HTMLElement}
 */
const scaleTextElement = document.getElementById('scale')
scaleTextElement.innerText = 'Масштаб ' + gridStepInMeters + ' метр(ов) между точками'