import { css } from '../../styled-system/css'

import { Author, type Message as MessageType } from '../domain/Message'
import { button } from './ui/Button'

export const SendMessage = ({
  onMessage,
}: {
  onMessage: (message: MessageType) => void
}) => (
  <form
    onSubmit={(event) => {
      event.preventDefault()
      if (!(event.target instanceof HTMLFormElement)) return
      if (!('message' in event.target.elements)) return
      if (!(event.target.elements.message instanceof HTMLTextAreaElement))
        return

      onMessage({
        id: window.crypto.randomUUID(),
        content: event.target.elements.message.value,
        author: Author.User,
      })
    }}
    className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    })}
  >
    <fieldset
      className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}
    >
      <label htmlFor="message">Your query</label>
      <textarea
        id="message"
        name="message"
        className={css({
          padding: '2',
          background: 'slate.100',
          border: '1px solid ActiveBorder',
          // formSizing: 'content',
        })}
        minLength={1}
        rows={3}
      />
    </fieldset>

    <div className={css({ display: 'flex', justifyContent: 'end' })}>
      <button className={button()}>Ask AforGPT</button>
    </div>
  </form>
)
