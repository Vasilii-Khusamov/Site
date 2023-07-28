import {Point} from '../Math/Point'
import {drawArrow} from './drawArrow'
import {drawArrowOnCanvasContext2D} from './drawArrowOnCanvasContext2D'
import {JSDOM} from 'jsdom'

const dom = new JSDOM()
const document = dom.window.document

const expectedImageData = Uint8ClampedArray.from([
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,127,0,0,0,127,0,0,0,127,
    0,0,0,127,0,0,0,127,0,0,0,127,0,0,0,127,0,0,0,163,0,0,0,226,0,0,0,236,0,0,0,127,0,0,0,127,0,0,0,127,0,0,0,127,0,0,0,
    127,0,0,0,127,0,0,0,127,0,0,0,163,0,0,0,226,0,0,0,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0
])

test('drawArrow', () => {
    const arrowStartPoint = new Point(0, 5)
    const arrowEndPoint = new Point(10, 5)
    const arrowHeadWidth = 2
    const arrowHeadHeight = 2

    const canvasElement = document.createElement('canvas');
    canvasElement.width = 10;
    canvasElement.height = 10;
    document.body.appendChild(canvasElement);
    const ctx = canvasElement.getContext('2d');

    drawArrow(
        arrowStartPoint,
        arrowEndPoint,
        {
            headArrowHeight: arrowHeadHeight,
            headArrowWidth: arrowHeadWidth,
            draw: (arrowVertexes) => drawArrowOnCanvasContext2D(arrowVertexes, ctx)
        }
    )
    const resultImageData = ctx.getImageData(0,0,10,10).data
    document.body.removeChild(canvasElement)

    expect(resultImageData).toEqual(expectedImageData)


    // for (let i = 0; i < resultImageData.length; i++) {
    //     expect(resultImageData[i]).toBe(expectedImageData[i])
    // }
})