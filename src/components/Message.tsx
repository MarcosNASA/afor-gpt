import { css } from '../../styled-system/css'

import type { Message as MessageType } from '../domain/Message'
import { Author } from '../domain/Message'

import Afor from '../assets/avatar/afor.png'

export const Message = ({ message }: { message: MessageType }) => {
  if (message.author === Author.Afor) return <AforMessage message={message} />
  if (message.author === Author.User) return <UserMessage message={message} />
  throw new Error('Unreachable', { cause: message })
}

const AforMessage = ({ message }: { message: MessageType }) => {
  return (
    <div
      className={css({
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '1',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '2',
        })}
      >
        <span className={css({ textAlign: 'end' })}>AforGPT</span>

        <div
          className={css({
            padding: '2',
            borderBottomLeftRadius: 'md',
            borderBottomRightRadius: 'md',
            borderTopLeftRadius: 'md',
            borderTopRightRadius: '0%',
            background: 'blue.100',
            border: '1px solid ActiveBorder',
          })}
        >
          {message.content}
        </div>
      </div>

      <img
        src={Afor}
        role="presentation"
        className={css({
          height: '54px',
          width: '54px',
          mt: '24px',
          padding: '1',
          borderRadius: '50%',
          background: 'blue.200',
          border: '1px solid ActiveBorder',
          objectFit: 'cover',
        })}
      />
    </div>
  )
}

const UserMessage = ({ message }: { message: MessageType }) => {
  return (
    <div className={css({ display: 'flex', gap: '1' })}>
      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}
      >
        <span>Tu mensaje</span>

        <div
          className={css({
            padding: '2',
            borderBottomRightRadius: 'md',
            borderBottomLeftRadius: 'md',
            borderTopRightRadius: 'md',
            borderTopLeftRadius: '0%',
            background: 'green.100',
            border: '1px solid ActiveBorder',
          })}
        >
          {message.content}
        </div>
      </div>
    </div>
  )
}
