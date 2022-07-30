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
