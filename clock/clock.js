const MINUTES_IN_AN_HOUR = 60
const HOURS_IN_A_DAY = 24
export class Clock {
  constructor(hours, minutes=0) {
    this.minutes = hours * MINUTES_IN_AN_HOUR + minutes
  }

  toString() {
    let h = Math.floor(this.minutes / MINUTES_IN_AN_HOUR) % HOURS_IN_A_DAY
    if (h < 0) h += HOURS_IN_A_DAY
    let m = this.minutes % MINUTES_IN_AN_HOUR
    if (m < 0) m += MINUTES_IN_AN_HOUR
    return `${h.toString(10).padStart(2,'0')}:${m.toString(10).padStart(2,'0')}`
  }

  plus(minutes) {
    this.minutes += minutes
    return this
  }

  minus(minutes) {
    this.minutes -= minutes
    return this
  }

  equals(time) {
    return this.toString() === time.toString()
  }
}

