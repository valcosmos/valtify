import { computed, defineComponent, toRefs } from 'vue'
import usePage from './composables/use-page'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'

function getCenterPage(
  totalPage: number,
  pageIndex: number,
  pagerCount: number
) {
  const totalPageArr = Array.from(Array(totalPage).keys())

  if (totalPage <= pagerCount) {
    // 页码太少 全部显示
    //
    return totalPageArr.slice(2, totalPage)
  } else {
    // 计算中位数
    const middle = Math.ceil(pagerCount / 2)
    if (pageIndex <= middle) {
      // 左边全显示
      return totalPageArr.slice(2, pagerCount)
    } else if (pageIndex >= totalPage - middle + 1) {
      // 右边全显示
      return totalPageArr.slice(totalPage - pagerCount + 2, totalPage)
    } else {
      // 中间显示
      return totalPageArr.slice(pageIndex - middle + 2, pageIndex + middle - 1)
    }
  }
}

export default defineComponent({
  name: 'Pagination',
  props: paginationProps,
  setup(props: PaginationProps) {
    // 首页与尾页是常驻的，如果只有一页，则不现实
    // 页码按钮有一个最大数量pagerCount, 上图是7，也就是说最多显示7个页码按钮
    // 如果总页数的totalPage大于pagerCount，则会出现显示不下的情况，这时显示不下的部分用...便是，并且这个...是可以快速往前、往后跳转到N页的
    // 中间页码应该显示的页码按钮数量在0到pagerCount-2之间
    // 只有两页的情况下，中间页码按钮数量为0
    // 大于等于pagerCount的情况下，中间按钮数量等于pagerCount-2
    // 当中间页码左边的页数小于2时，应该出现左边...
    // 当中间页码右边的页数小于totalPage-3时，应该出现右边的
    const { total, pageSize, pagerCount } = toRefs(props)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    const { pageIndex, setPageIndex, jumpPage, prevPage, nextPage } = usePage()
    const centerPages = computed(() =>
      getCenterPage(totalPage.value, pageIndex.value, pagerCount.value)
    )

    return () => (
      <div class="v-pagination">
        <button
          onClick={() => prevPage()}
          class={{ current: pageIndex.value === 1 }}
        >
          上一页
        </button>
        {/* pager部分 */}
        <ul>
          <li onClick={() => setPageIndex(1)}>1</li>
          {/* 总页码totalPage大于按钮数量pagerCount */}
          {/* 当中间页码左边的页数小于2时，应该出现左边... */}
          {totalPage.value > pagerCount.value &&
            pageIndex.value > Math.ceil(pagerCount.value / 2) && (
              <li class="more left" onClick={() => jumpPage(-5)}>
                ...
              </li>
            )}

          {centerPages.value.map(page => (
            <li
              class={{ current: pageIndex.value === page }}
              onClick={() => setPageIndex(page)}
            >
              {page}
            </li>
          ))}

          {totalPage.value > pagerCount.value &&
            pageIndex.value <
              totalPage.value - Math.ceil(pagerCount.value / 2) + 1 && (
              <li class="more right" onClick={() => jumpPage(5)}>
                ...
              </li>
            )}

          {totalPage.value > 1 && (
            <li
              class={{ current: pageIndex.value === totalPage.value }}
              onClick={() => setPageIndex(totalPage.value)}
            >
              {totalPage.value}
            </li>
          )}
        </ul>

        <button onClick={() => nextPage()}>下一页</button>
      </div>
    )
  }
})
