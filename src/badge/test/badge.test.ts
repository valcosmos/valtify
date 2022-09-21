import { render } from '@testing-library/vue'
import Badge from '../src/badge'

describe('Badge test', () => {
  test('Badge init render', async () => {
    const { getByText } = render(Badge, {
      slots: {
        default: () => 'Star'
      }
    })
    const badge = getByText('Star')
    expect(badge.classList.contains('v-badge'))
  })
})
