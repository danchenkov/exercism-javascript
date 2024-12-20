/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time) {
	if (time === undefined) return 'You forgot to set the timer.'
	if (time === 0) return 'Lasagna is done.'
	return 'Not done, please wait.'
}

export function preparationTime(layers, timePerLayer = 2) {
	return layers.length * timePerLayer
}

export function quantities(layers) {
	let quantities = { 'noodles': 0, 'sauce': 0 }
	layers.map((layer) => {
		if (layer === 'sauce') quantities['sauce'] += 0.2
		if (layer === 'noodles') quantities['noodles'] += 50
	})
	return quantities
}

export function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, scale) {
	return Object.entries(recipe).reduce((acc, [key, value]) => {
		acc[key] = typeof value === 'number' ? value * scale / 2 : value;
		return acc;
	}, {})
}