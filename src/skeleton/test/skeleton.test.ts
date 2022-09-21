import { render } from '@testing-library/vue'
import Skeleton from '../src/skeleton'

describe('skeleton test', () => {
  test('skeleton init render', async () => {
    const { getByText } = render(Skeleton, {
      props: { bg: true },
      slots: { default: () => 'skeleton' }
    })
    const sk = getByText('skeleton')
    expect(sk.classList.contains('v-skeleton'))
  })
})
