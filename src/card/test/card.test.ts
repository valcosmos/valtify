import { render } from '@testing-library/vue'
import Card from '../src/card'

describe('card test', () => {
  test('content slot should work', async () => {
    const { getByText } = render(Card, {
      slots: {
        default: () => 'body'
      }
    })
    const content = getByText('body')
    expect(content.classList.contains('v-card__content'))
  })
  test('header props should work', async () => {
    const { getByText } = render(Card, {
      props: {
        header: 'header'
      }
    })
    const header = getByText('header')
    expect(header.classList.contains('v-card__heder'))
  })

  test('header slot should work', async () => {
    const { getByText } = render(Card, {
      slots: {
        header: () => 'header'
      }
    })
    const header = getByText('header')
    expect(header.classList.contains('v-card__header'))
  })
})
