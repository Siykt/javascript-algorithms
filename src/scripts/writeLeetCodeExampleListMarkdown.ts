import { readdir, readFile, writeFile } from 'fs-extra'
import path from 'path'

async function getComments(): Promise<
  { type: string; data: { name: string; leetCodeLink: string; githubLink: string; src: string }[] }[]
> {
  const algorithms = path.join(__dirname, '..', 'algorithms')
  const algorithmsTypeDirs = (await readdir(algorithms)).filter((type) => !['sort', 'cache'].includes(type))
  const files = await Promise.all(
    algorithmsTypeDirs.map(async (algorithmsTypeDir) => {
      const algorithmsTypeDirPath = path.join(algorithms, algorithmsTypeDir)
      const algorithmsTypeFiles = await readdir(algorithmsTypeDirPath)
      return algorithmsTypeFiles
        .filter((filepath) => /(?<!\.test)\.ts$/.test(filepath))
        .map((algorithmsTypeFile) => path.join(algorithmsTypeDirPath, algorithmsTypeFile))
    }),
  )
  return await Promise.all(
    files.map(async (filepaths, index) => {
      return {
        type: algorithmsTypeDirs[index],
        data: await Promise.all(
          filepaths.map(async (filepath) => {
            const leetCodeLink =
              'https://leetcode.cn/problems/' +
              filepath
                .replace(/^.+\\(.+).ts$/g, '$1')
                .replace(/(?<!^)([A-Z])/g, '-$1')
                .toLowerCase()
            const buffer = await readFile(filepath)
            const fileContent = buffer.toString()
            const name = /^\s\*\s(\d+\..+)/gm.exec(fileContent) || /^\s\*\s(面试题.+)/gm.exec(fileContent)
            const githubLink =
              'https://github.com/Siykt/javascript-algorithms/blob/master/' +
              (/^\s\*\s(@description\s\..+)/gm.exec(fileContent)?.[1] ||
                filepath.replace(/\\/g, '/').replace(/.+javascript-algorithms\//, ''))
            return {
              name: name ? name[1] : '',
              leetCodeLink,
              githubLink,
              src: filepath.replace(/^.+\\(.+\.ts)$/, '$1'),
            }
          }),
        ),
      }
    }),
  )
}

const DEFAULT_CONTENT = `# LeetCode 题例

## 二叉树

[Tree 算法实例](/tree.html#算法实例)

## 链表

[Linked List 算法实例](/linked-list.html#算法实例)
`

/**
 * 生成 LeetCode 题例列表
 */
export default async function writeLeetCodeExampleListMarkdown() {
  const comments = await getComments()
  await writeFile(
    path.join(__dirname, '../../docs/leet-code-example-list.md'),
    `${DEFAULT_CONTENT}\n${comments
      .map((comment) => {
        const title = `## ${comment.type[0].toUpperCase() + comment.type.slice(1)}`
        const content = comment.data
          .sort((a, b) => parseInt(a.name) - parseInt(b.name))
          .map((item) => {
            return `- [${item.name}](${item.leetCodeLink}) -- 实现源码: [${item.src}](${item.githubLink})\n`
          })
        return `${title}\n\n${content.join('\n')}`
      })
      .join('\n')}`,
  )
}
writeLeetCodeExampleListMarkdown()
