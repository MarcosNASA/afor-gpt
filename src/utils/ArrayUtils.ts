import { NumberUtils } from './NumberUtils'

const random = (array: any[]) => {
  const randomNumberWithinArrayBoundaries = NumberUtils.random(0)(
    array.length - 1,
  )
  return array[randomNumberWithinArrayBoundaries]
}

export const ArrayUtils = {
  random,
}
