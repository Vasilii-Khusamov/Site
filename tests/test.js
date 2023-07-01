import {testCalculateDistanceBetweenPoints} from './testCalculateDistanceBetweenPoints.js';
import {testCalculateVectorAngle} from './testCalculateVectorAngle.js';
import {testCalculateVectorAngleByAxisX} from './testCalculateVectorAngleByAxisX.js';
import {testCalculateVectorLength} from './testCalculateVectorLength.js';
import {testMultiplyMatrixByVector} from './testMultiplyMatrixByVector.js';
import {testMultiplyMatrixByVectorArray} from './testMultiplyMatrixByVectorArray.js';
import {testMultiplyVectorByNumber} from './testMultiplyVectorByNumber.js';
import {testPointConstructor} from './testPointConstructor.js';
import {testSubtractVectors} from './testSubtractVectors.js';
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
	testMultiplyMatrixByVectorArray
];

for (const test of tests) {
	try {
		const start = Date.now();
		const success = test();
		const delta = Date.now() - start;
		console.log(test.name, 'OK', `${delta} мс`);
	} catch (error) {
		console.log(test.name, error.message);
	}
}
