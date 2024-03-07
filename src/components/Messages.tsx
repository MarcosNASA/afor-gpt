import { css } from '../../styled-system/css'

import { type Message as MessageType } from '../domain/Message'
import { Message } from './Message'

export const Messages = ({ messages }: { messages: MessageType[] }) => {
  return (
    <div
      className={css({
        padding: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
        wordBreak: 'break-all',
      })}
    >
      {messages.map((message, index) => {
        const isLastMessage = index === messages.length - 1
        return (
          <div
            className={css({ width: '100%', display: 'flex' })}
            {...(isLastMessage && {
              ref: (node) => {
                if (!node) return
                node.scrollIntoView({ behavior: 'smooth', block: 'end' })
              },
            })}
          >
            <Message key={message.id} message={message} />
          </div>
        )
      })}
    </div>
  )
}
