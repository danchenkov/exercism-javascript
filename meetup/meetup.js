//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS_IN_A_WEEK = 7
const TEENS_START_AT = 13
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const qualifiers = ['first', 'second', 'third', 'fourth', 'fifth']

export const meetup = (year, month, qualifier, weekDay) => {
  let date, day = days.indexOf(weekDay), diff = 0

  switch (qualifier) {
    case 'teenth':
      date = new Date(year, month - 1, TEENS_START_AT)
      diff = DAYS_IN_A_WEEK
      break
    case 'last':
      date = new Date(year, month, 1)
      qualifier = 'first'
      diff = -DAYS_IN_A_WEEK
      break
    default:
      date = new Date(year, month - 1, 1)
  }

  diff += day - date.getDay()
  if (day < date.getDay()) diff += DAYS_IN_A_WEEK

  diff += DAYS_IN_A_WEEK * qualifiers.indexOf(qualifier)

  date.setDate(date.getDate() + diff)

  return date
}