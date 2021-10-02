/**
 * The total amount of minutes for cooking lasagnia.
 */
 export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * The amount of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
/**
 * Determines the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return actualMinutesInOven < 0 ? EXPECTED_MINUTES_IN_OVEN : (actualMinutesInOven > 40 ? 0 : EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers < 0 ? 0 : numberOfLayers  * PREPARATION_MINUTES_PER_LAYER
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return numberOfLayers < 0 ? 0 : numberOfLayers  * PREPARATION_MINUTES_PER_LAYER + (actualMinutesInOven < 0 ? EXPECTED_MINUTES_IN_OVEN : (actualMinutesInOven > 40 ? 0 : actualMinutesInOven) )
}
