import {testCalculateDistanceBetweenPoints} from './testCalculateDistanceBetweenPoints'
import {testCalculateElectrostaticFieldIntensity} from './testCalculateElectrostaticFieldIntensity'
import {testCalculateVectorAngle} from './testCalculateVectorAngle'
import {testCalculateVectorAngleByAxisX} from './testCalculateVectorAngleByAxisX'
import {testCalculateVectorLength} from './testCalculateVectorLength'
import {testCreateArrowVertexes} from './testCreateArrowVertexes'
import {testCreateAxisXArrowVertexes} from './testCreateAxisXArrowVertexes'
import {testDrawArrow} from './testDrawArrow'
import {testDrawArrowOnCanvasContext2D} from './testDrawArrowOnCanvasContext2D'
import {TestError} from './TestError'
import {testMultiplyMatrixByVector} from './testMultiplyMatrixByVector'
import {testMultiplyMatrixByVectorArray} from './testMultiplyMatrixByVectorArray'
import {testMultiplyVectorByNumber} from './testMultiplyVectorByNumber'
import {testPointConstructor} from './testPointConstructor'
import {testSubtractVectors} from './testSubtractVectors'
import {testTransformToScreen} from './testTransformToScreen'
import {testVectorConstructor} from './testVectorConstructor'

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
