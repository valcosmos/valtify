import { Meta, StoryFn } from '@storybook/vue3'
import { Button } from '.'

const ButtonMeta: Meta<typeof Button> = { title: 'Button', component: Button }

export default ButtonMeta

export const Default: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button>Default Button</Button>'
})
