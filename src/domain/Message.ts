import { UUID } from '../utils/UUID'
import { ValueOf } from '../utils/types'

export const Author = {
  Afor: 'Afor',
  User: 'User',
} as const
export type Author = ValueOf<typeof Author>

export type Message = {
  id: UUID
  content: string
  author: Author
}
