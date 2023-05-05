import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '数据结构与算法',
  description: '使用javascript/typescript学习数据结构与算法',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'LeetCode 题例', link: '/leet-code-example-list' },
    ],
    sidebar: [
      {
        text: 'LeetCode 题例',
        link: '/leet-code-example-list',
      },
      {
        text: '数据结构',
        items: [
          { text: 'Tree', link: '/tree' },
          { text: '链表', link: '/linked-list' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Siykt/javascript-algorithms' }],
  },
})
