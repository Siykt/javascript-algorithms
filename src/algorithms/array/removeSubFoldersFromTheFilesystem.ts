/**
 * 1233. 删除子文件夹
 * @param folder 文件夹
 */
export function removeSubFoldersFromTheFilesystem(folder: string[]): string[] {
  // 排序
  // 排序后文件夹形成接近字典树结构, 可以快速查询到子文件夹
  folder.sort()
  const ans = [folder[0]]
  for (let i = 1; i < folder.length; i++) {
    const cur = folder[i]
    const last = ans[ans.length - 1]
    const lastLen = last.length
    if (
      // 字符长度都不相等即为新的父目录
      cur.length <= lastLen ||
      // 截取父目录长度判断是否为 /
      cur.charAt(lastLen) !== '/' ||
      // 否则判断前位是否为父目录
      cur.indexOf(last) !== 0
    ) {
      ans.push(cur)
    }
  }
  return ans
}
