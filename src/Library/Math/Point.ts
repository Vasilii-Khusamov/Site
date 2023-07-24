export class Point {
	private _x: number
	private _y: number
	constructor(x, y) {
		this._x = x
		this._y = y
	}

	get x() {
		return this._x
	}

	get y() {
		return this._y
    }
}