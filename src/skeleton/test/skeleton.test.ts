import { render } from '@testing-library/vue'
import Skeleton from '../src/skeleton'

describe('skeleton test', () => {
  test('skeleton init render', async () => {
    const { getByRole } = render(Skeleton)
    getByRole('skeleton')
  })
})
