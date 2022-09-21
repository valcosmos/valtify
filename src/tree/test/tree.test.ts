import { render } from '@testing-library/vue'
import Tree from '../src/tree'

describe('tree test', () => {
  test('tree init render', async () => {
    const { getByText } = render(Tree, {
      props: {
        data: [
          {
            label: 'docs',
            id: 'docs'
          }
        ]
      }
    })
    const tree = getByText('docs')
    expect(tree.classList.contains('v-tree'))
  })
})
