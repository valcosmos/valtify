import { computed, defineComponent, toRefs } from 'vue'
import usePage from '../composables/use-page'
import { getCenterPage } from '../utils'
import { PagerProps, pagerProps } from './pager-type'
export const Pager = defineComponent({
  name: 'VPager',
  props: pagerProps,
  setup(props: PagerProps) {
    const { total, pageSize, pagerCount } = toRefs(props)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    const { pageIndex, setPageIndex, jumpPage, prevPage, nextPage } = usePage()
    const centerPages = computed(() =>
      getCenterPage(totalPage.value, pageIndex.value, pagerCount.value)
    )

    return {
      centerPages,
      pageIndex,
      totalPage,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage
    }
  },
  render() {
    const {
      totalPage,
      pagerCount,
      pageIndex,
      setPageIndex,
      jumpPage,
      centerPages
    } = this
    return () => (
      <ul>
        <li
          class={{ current: pageIndex === 1 }}
          onClick={() => setPageIndex(1)}
        >
          1
        </li>
        {/* 总页码totalPage大于按钮数量pagerCount */}
        {/* 当中间页码左边的页数小于2时，应该出现左边... */}
        {totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && (
          <li class="more left" onClick={() => jumpPage(-5)}>
            ...
          </li>
        )}

        {centerPages.map(page => (
          <li
            class={{ current: pageIndex === page }}
            onClick={() => setPageIndex(page)}
          >
            {page}
          </li>
        ))}

        {totalPage > pagerCount &&
          pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && (
            <li class="more right" onClick={() => jumpPage(5)}>
              ...
            </li>
          )}

        {totalPage > 1 && (
          <li
            class={{ current: pageIndex === totalPage }}
            onClick={() => setPageIndex(totalPage)}
          >
            {totalPage}
          </li>
        )}
      </ul>
    )
  }
})

export default Pager
