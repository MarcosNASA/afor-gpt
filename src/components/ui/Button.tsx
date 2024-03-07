import { cva } from '../../../styled-system/css'

export const button = cva({
  base: {
    display: 'flex',
    borderRadius: 'sm',
  },
  variants: {
    visual: {
      solid: { bg: 'blue.400', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'blue.400' },
    },
    size: {
      sm: { padding: '2', fontSize: '14px' },
      lg: { padding: '4', fontSize: '22px' },
    },
  },
  defaultVariants: {
    visual: 'solid',
    size: 'sm',
  },
})
