import { defineComponent, provide, ref } from 'vue'
import { CloseIcon, AddIcon } from '../../icon'
import '../style/tabs.scss'

export default defineComponent({
  name: 'VTabs',
  props: {
    active: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:active'],
  setup(props, { slots }) {
    const tabsData = ref<
      Array<{ id: string; title: string; type?: 'random'; content?: string }>
    >([])
    provide('tabs-data', tabsData)

    const activeTab = ref(props.active)
    provide('active-tab', activeTab)

    const changeTab = (tabId: string) => {
      activeTab.value = tabId
    }

    const closeTab = (tabId: string) => {
      const tabIndex = tabsData.value.findIndex(item => item.id === tabId)
      tabsData.value.splice(tabIndex, 1)
    }

    const addTab = () => {
      const id = Math.floor(Math.random() * 1000) + ''
      tabsData.value.push({
        id,
        type: 'random',
        title: 'New Tab',
        content: 'New Tab Content'
      })

      activeTab.value = id
      console.log(tabsData.value)
    }

    return () => (
      <div class={'v-tabs'}>
        {/* nav */}
        <ul class={'v-tabs__nav'}>
          {tabsData.value.map(tab => (
            <li
              onClick={() => changeTab(tab.id)}
              class={tab.id === activeTab.value ? 'active' : ''}
            >
              {tab.title}

              {/* close tab */}
              {props.closable && <CloseIcon onClick={() => closeTab(tab.id)} />}
            </li>
          ))}

          {/* add tab button */}
          {props.addable && (
            <li>
              <AddIcon
                onClick={() => {
                  console.log(1)

                  addTab()
                }}
              />
            </li>
          )}
        </ul>

        {/* content */}
        {slots.default?.()}

        {/* show new content */}
        {tabsData.value
          .filter(tab => tab.type === 'random')
          .map(tab => (
            <div class={'v-tab'}>{tab.content}</div>
          ))}
      </div>
    )
  }
})
