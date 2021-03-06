export const hey = (message) => {
  const blank = message.match(/^\s*$/)
  const question = message.trim().endsWith('?')
  const uppercase = message.match(/[A-Z]/) && !message.match(/[a-z]/)

  if (blank) return 'Fine. Be that way!'
  if (uppercase && question) return "Calm down, I know what I'm doing!"
  if (uppercase) return 'Whoa, chill out!'
  if (question) return 'Sure.'
  return 'Whatever.'
}
