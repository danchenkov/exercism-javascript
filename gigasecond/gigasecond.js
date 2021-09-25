const GIGASECOND_IN_MS = 10**12
export const gigasecond = (time) => (new Date(time.getTime() + GIGASECOND_IN_MS))
