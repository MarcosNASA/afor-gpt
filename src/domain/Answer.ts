import { ArrayUtils } from '../utils/ArrayUtils'
import { Author } from './Message'

const ANSWERS = [
  `No tengo suficiente información`,
  `Pese a que tu pregunta contradiga todo aquello que defiendo, lamento decir que no tengo suficiente información para responder`,
  `Mmm... vaaaaale...`,
  `React so gooood, Fragment, Fragment, coding like a PRO. React so goooood, Fragment, Fragment, Virtual DOM. DOM, DOM, DOM. React so gooood.`,
  'OMAI GUDNESSSSS!',
  'Daaaaaaaaaaaaaaaaaaaaaaamn',
  'Soy un hámster adorable, por favor, déjame en paz',
  'Literalmente',
  'Estoy chiquita',
  'La respuesta está en mi libro de PHP + Laravel, disponible pronto',
  '¿Has oído hablar de UnoCSS?',
  '¿Esto se considera un formulario?',
]

const generate = () => ({
  id: window.crypto.randomUUID(),
  content: ArrayUtils.random(ANSWERS),
  author: Author.Afor,
})

const initial = () => ({
  id: window.crypto.randomUUID(),
  content: `¡Hola, mis niños lindos!`,
  author: Author.Afor,
})

export const Answer = {
  generate,
  initial,
}
