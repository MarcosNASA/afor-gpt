import * as React from 'react'

import { css } from '../styled-system/css'

import { Answer } from './domain/Answer'
import { Message } from './domain/Message'
import { Messages } from './components/Messages'
import { SendMessage } from './components/SendMessage'

function App() {
  const [messages, setMessages] = React.useState<Message[]>([Answer.initial()])

  return (
    <div className={css({ background: 'slate.100' })}>
      <main
        className={css({
          height: '100vh',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4',
          display: 'grid',
          gridTemplateRows: '60px auto 160px',
          gap: '2',
        })}
      >
        <p
          className={css({
            fontSize: '2xl',
            fontWeight: 'bold',
          })}
        >
          AforGPT
        </p>

        <div className={css({ overflowY: 'auto', scrollbarGutter: 'stable' })}>
          <Messages messages={messages} />
        </div>

        <SendMessage
          onMessage={(message) => {
            setMessages([...messages, message, Answer.generate()])
          }}
        />
      </main>
    </div>
  )
}

export default App
