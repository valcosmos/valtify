import { ref } from 'vue'

export default function usePage(defaultPageIndex = 1) {
  // 页码
  // 上一页 页码-1
  // 下一页 页码+1
  // 点数字，跳转到相应页码
  // 点快速前往按钮，页码+5
  // 点快速后退，页码-5

  const pageIndex = ref<number>(defaultPageIndex)

  const setPageIndex = (current: number) => {
    pageIndex.value = current
  }

  const jumpPage = (page: number) => {
    pageIndex.value += page
  }

  const prevPage = () => jumpPage(-1)

  const nextPage = () => jumpPage(1)

  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage }
}
