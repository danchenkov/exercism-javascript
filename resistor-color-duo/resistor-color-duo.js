//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export const decodedValue = (color) => color.slice(0, 2).reduce((a, c, i) => a + COLORS.indexOf(c) * 10 ** (1 - i), 0)
