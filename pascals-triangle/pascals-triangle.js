//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const nextRow = (prevRow = []) => Array.from({ length: prevRow.length + 1 }, (_, i) => (prevRow[i] + prevRow[i - 1]) || 1)
export const rows = (n, row = null) => Array.from({ length: n }, () => row = nextRow(row || []))
