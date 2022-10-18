import { render } from '@testing-library/vue'
import Tab from '../src/tab'

describe('tab test', () => {
  test('tab init render', async () => {
    const { getByRole } = render(Tab)
    getByRole('tab')
  })
})
