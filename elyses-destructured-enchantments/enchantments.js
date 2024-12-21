export const getFirstCard = ([firstCard]) => firstCard

export const getSecondCard = ([, secondCard]) => secondCard

export const swapTopTwoCards = ([firstCard, secondCard, ...rest]) => [secondCard, firstCard, ...rest]

export const discardTopCard = ([firstCard, ...rest]) => [firstCard, [...rest]]

const FACE_CARDS = ['jack', 'queen', 'king']
export const insertFaceCards = ([firstCard, ...rest]) => [firstCard, ...FACE_CARDS, ...rest]

