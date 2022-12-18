import { defineComponent, Teleport, toRefs, Transition } from 'vue'
import { CloseIcon } from '../../icon'
import { DrawerProps, drawerProps } from './drawer-type'

export default defineComponent({
  name: 'Drawer',
  props: drawerProps,
  emits: ['update:visible'],
  setup(props: DrawerProps, { emit, slots }) {
    const { visible } = toRefs(props)
    return () => (
      <Teleport to={'body'}>
        <div class="v-drawer" style={{ width: visible.value ? '100%' : '0%' }}>
          <Transition name="fade">
            {visible.value && (
              <div
                class={'v-drawer-mask'}
                onClick={() => emit('update:visible', false)}
              />
            )}
          </Transition>
          <Transition name="slide">
            {visible.value && (
              <div class={'v-drawer-wrapper'}>
                <div class={'v-drawer-wrapper__header'}>
                  <CloseIcon
                    size={20}
                    onClick={() => emit('update:visible', false)}
                  />
                  <div className="v-drawer-title">{props.title}</div>
                </div>
                <div class={'v-drawer-wrapper__content'}>
                  {slots.default?.()}
                </div>
              </div>
            )}
          </Transition>
        </div>
      </Teleport>
    )
  }
})
