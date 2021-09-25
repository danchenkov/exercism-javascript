const SECONDS_IN_EARTH_YEAR = 31557600
const ORBITAL_PERIOD = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.7913
}
const round = (n) => Math.round(n * 100) / 100
export const age = (planet, ageInSeconds) => round(ageInSeconds / ORBITAL_PERIOD[planet] / SECONDS_IN_EARTH_YEAR);
