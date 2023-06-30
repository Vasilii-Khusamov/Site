import {testCalculateDistanceBetweenPoints} from './testCalculateDistanceBetweenPoints.js';
import {testPointConstructor} from './testPointConstructor.js';
import {testSubtractVectors} from './testSubtractVectors';
import {testVectorConstructor} from './testVectorConstructor.js';

const tests = [
	testCalculateDistanceBetweenPoints,
	testPointConstructor,
	testVectorConstructor,
	testSubtractVectors
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
