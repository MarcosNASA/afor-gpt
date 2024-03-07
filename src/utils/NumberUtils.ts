const random = (from: number) => (to: number) =>
  Math.floor(Math.random() * (to - from + 1) + from)

export const NumberUtils = {
  random,
}
