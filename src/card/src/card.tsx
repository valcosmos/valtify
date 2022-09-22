import { defineComponent } from 'vue'
import { CardProps, cardProps } from './card-type'

export default defineComponent({
  name: 'Card',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    return () => (
      <div class={['v-card', `v-card-${props.shadow}-shadow`]}>
        {(slots.header || props.header) && (
          <div class="v-card__header">{slots.header?.() || props.header}</div>
        )}
        <div class="v-card__body" style={props.bodyStyle}>
          {slots.default?.()}
        </div>
      </div>
    )
  }
})
