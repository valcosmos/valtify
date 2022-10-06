export function getCenterPage(
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
