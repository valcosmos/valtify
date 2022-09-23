import { render } from '@testing-library/vue'
import Tag from '../src/tag'

describe('tag test', () => {
  test('tag init render', async () => {
    const { getByText } = render(Tag, {
      slots: {
        default: () => 'primary'
      }
    })
    const tag = getByText('primary')
    expect(tag.classList.contains('v-tag'))
  })
  test('tag type should work', async () => {
    const { getByText } = render(Tag, {
      props: {
        type: 'success'
      },
      slots: {
        default: () => 'tag'
      }
    })
    const tag = getByText('tag')
    expect(tag.classList.contains('success'))
  })
  test('tag theme should work', async () => {
    const { getByText } = render(Tag, {
      props: {
        effect: 'dark'
      },
      slots: {
        default: () => 'tag'
      }
    })
    const tag = getByText('tag')
    expect(tag.classList.contains('dark'))
  })
  test('tag size should work', async () => {
    const { getByText } = render(Tag, {
      props: {
        size: 'small'
      },
      slots: {
        default: () => 'tag'
      }
    })
    const tag = getByText('tag')
    expect(tag.classList.contains('small'))
  })
})
