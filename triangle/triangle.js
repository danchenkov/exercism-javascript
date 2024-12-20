//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
	constructor(...sides) {
		this.sides = [...sides]
		this.valid = true
		for (let side of sides) {
			if (Number.isNaN(side) || side <= 0)
				this.valid = false
		}
		if ((sides[0] + sides[1] < sides[2]) ||
			(sides[0] + sides[2] < sides[1]) ||
			(sides[1] + sides[2] < sides[0]))
			this.valid = false
	}

	get isEquilateral() {
		return this.valid &&
			(this.sides[0] === this.sides[1]) &&
			(this.sides[1] === this.sides[2])
	}

	get isIsosceles() {
		return this.valid && (
			(this.sides[0] === this.sides[1]) ||
			(this.sides[1] === this.sides[2]) ||
			(this.sides[2] === this.sides[0])
		)
	}

	get isScalene() {
		return this.valid &&
			(this.sides[0] !== this.sides[1]) &&
			(this.sides[1] !== this.sides[2]) &&
			(this.sides[2] !== this.sides[0])
	}
}
