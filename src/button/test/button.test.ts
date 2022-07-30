import { render } from '@testing-library/vue'

import { Button } from '../index'

test('should work', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

test('default slot should be button', () => {
  const { getByText } = render(Button)
  getByText('button')
})

test('slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default: () => 'confirm'
    }
  })
  getByText('confirm')
})

test('default type should be secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('v-btn--secondary'))
})

test('prop type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('v-btn--primary'))
})
