/*
    Define the text color relative to the background color, works with "purple", #800080 or rgb()
    - extract HSL from background color
    - calculate the lightness (L), the threshold is 50%, works in most cases
*/
export const textColorFor = (backgroundColor: string): string =>
    `hsl(from ${backgroundColor} h s calc(clamp(0, (50 - l) * 1000, 100) * 1%))`
