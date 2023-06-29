import { testCalculateDistanceBetweenPoints } from "./testCalculateDistanceBetweenPoints.js"




const tests = [
    testCalculateDistanceBetweenPoints
]

for (const test of tests) {
    try {
        const start = Date.now()
        const success = test()
        const delta = Date.now() - start
        console.log(test.name, 'OK', `${delta} мс`)
    } catch (error) {
        console.log(test.name, error.message)
    }
}
