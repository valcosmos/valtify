import { defineComponent, toRefs, Ref, inject } from 'vue'
import { TabProps, tabProps } from './tab-type'

export default defineComponent({
  name: 'Tab',
  props: tabProps,
  setup(props: TabProps, { slots }) {
    const { title, id } = toRefs(props)
    //      get current actived tab
    const activeTab = inject('active-tab') as Ref<string>
    const tabsData = inject('tabs-data') as Ref<
      Array<{ id: string; title: string }>
    >

    tabsData.value.push({ id: id.value, title: title.value })

    return () => (
      <>
        {id.value === activeTab.value && (
          <div class="v-tab">{slots.default?.()}</div>
        )}
      </>
    )
  }
})
