import {testCalculateDistanceBetweenPoints} from './testCalculateDistanceBetweenPoints.js';
import {testCalculateElectrostaticFieldIntensity} from './testCalculateElectrostaticFieldIntensity.js'
import {testCalculateVectorAngle} from './testCalculateVectorAngle.js';
import {testCalculateVectorAngleByAxisX} from './testCalculateVectorAngleByAxisX.js';
import {testCalculateVectorLength} from './testCalculateVectorLength.js';
import {testCreateArrowVertexes} from './testCreateArrowVertexes.js'
import {testCreateAxisXArrowVertexes} from './testCreateAxisXArrowVertexes.js';
import {testDrawArrow} from './testDrawArrow.js'
import {testDrawArrowOnCanvasContext2D} from './testDrawArrowOnCanvasContext2D.js';
import {TestError} from './TestError.js';
import {testMultiplyMatrixByVector} from './testMultiplyMatrixByVector.js';
import {testMultiplyMatrixByVectorArray} from './testMultiplyMatrixByVectorArray.js';
import {testMultiplyVectorByNumber} from './testMultiplyVectorByNumber.js';
import {testPointConstructor} from './testPointConstructor.js';
import {testSubtractVectors} from './testSubtractVectors.js';
import {testTransformToScreen} from './testTransformToScreen.js'
import {testVectorConstructor} from './testVectorConstructor.js';

const tests = [
	testCalculateDistanceBetweenPoints,
	testPointConstructor,
	testVectorConstructor,
	testSubtractVectors,
	testCalculateVectorAngle,
	testCalculateVectorAngleByAxisX,
	testCalculateVectorLength,
	testMultiplyVectorByNumber,
	testMultiplyMatrixByVector,
	testMultiplyMatrixByVectorArray,
	testDrawArrowOnCanvasContext2D,
	testCreateAxisXArrowVertexes,
	testCreateArrowVertexes,
	testDrawArrow,
	testTransformToScreen,
	testCalculateElectrostaticFieldIntensity
];

for (const test of tests) {
	try {
		const start = Date.now();
		const success = test();
		const delta = Date.now() - start;
		console.log(test.name, 'OK', `${delta} мс`);
	} catch (error) {
		if (error instanceof TestError) {
			console.log(test.name, error.message);
		} else {
			throw error
		}
	}
}
