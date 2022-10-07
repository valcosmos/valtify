import { computed, defineComponent, onMounted, ref, watch } from 'vue'

import { PaginationProps, paginationProps } from './pagination-type'
import VPager from './components/pager'

export default defineComponent({
  name: 'Pagination',
  props: paginationProps,
  emits: ['update:modelValue'],
  setup(props: PaginationProps, { emit }) {
    // 首页与尾页是常驻的，如果只有一页，则不现实
    // 页码按钮有一个最大数量pagerCount, 上图是7，也就是说最多显示7个页码按钮
    // 如果总页数的totalPage大于pagerCount，则会出现显示不下的情况，这时显示不下的部分用...便是，并且这个...是可以快速往前、往后跳转到N页的
    // 中间页码应该显示的页码按钮数量在0到pagerCount-2之间
    // 只有两页的情况下，中间页码按钮数量为0
    // 大于等于pagerCount的情况下，中间按钮数量等于pagerCount-2
    // 当中间页码左边的页数小于2时，应该出现左边...
    // 当中间页码右边的页数小于totalPage-3时，应该出现右边的

    // const { prevPage, nextPage } = usePage()

    const pager = ref()

    const disabledPrev = computed(() =>
      pager.value ? pager.value.pageIndex < 2 : true
    )

    const disabledNext = computed(() =>
      pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
    )
    onMounted(() => {
      watch(
        () => pager.value.pageIndex,
        (newValue: number) => {
          emit('update:modelValue', newValue)
        }
      )

      watch(
        () => props.modelValue,
        (newValue: number) => {
          pager.value.pageIndex = newValue
        }
      )
    })
    return () => (
      <div class="v-pagination">
        <button
          disabled={disabledPrev.value}
          onClick={() => pager.value.prevPage()}
          class={['prev', disabledPrev.value && 'disabled']}
        >
          上一页
        </button>
        {/* pager部分 */}
        <VPager {...props} ref={pager} />
        <button
          disabled={disabledNext.value}
          onClick={() => pager.value.nextPage()}
          class={['next', disabledNext.value && 'disabled']}
        >
          下一页
        </button>
      </div>
    )
  }
})
