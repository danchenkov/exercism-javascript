export const buildSign = (occasion, name) => `Happy ${occasion} ${name}!`

export const buildBirthdaySign = (age) => `Happy Birthday! What a ${age < 50 ? "young" : "mature"} fellow you are.`

export const graduationFor = (name, year) => `Congratulations ${name}!\nClass of ${year}`

export const costOf = (sign, currency) => `Your sign costs ${(20 + sign.length * 2).toFixed(2)} ${currency}.`
