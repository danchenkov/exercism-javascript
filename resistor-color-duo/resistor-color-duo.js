export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
// export const decodedValue = (color) => parseInt(color.slice(0,2).map(c => COLORS.indexOf(c)).join(''), 10);
export const decodedValue = (color) => color.slice(0,2).reduce((a,c,i) => a+COLORS.indexOf(c)*10**(1-i), 0)
