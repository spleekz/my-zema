export const makeFirstLetterCapital = (string: string): string => {
  const capitalFirstLetter = string[0].toUpperCase()
  const lowerCase = string.toLowerCase().slice(1)

  return capitalFirstLetter + lowerCase
}
