const nextRow = (prevRow = []) => Array.from({ length: prevRow.length + 1 }, (_, i) => (prevRow[i] + prevRow[i - 1]) || 1)
export const rows = (n, row = null) => Array.from({ length: n }, () => row = nextRow(row || []))
