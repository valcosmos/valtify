import { render } from '@testing-library/vue'
import Badge from '../src/badge'

describe('Badge test', () => {
  test('Badge init render', async () => {
    const { getByRole } = render(Badge)
    getByRole('Badge')
  })
})
