import { render } from '@testing-library/vue'
import Dropdown from '../src/dropdown'

describe('dropdown test', () => {
  test('dropdown init render', async () => {
    const { getByRole } = render(Dropdown)
    getByRole('dropdown')
  })
})
