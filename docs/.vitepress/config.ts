import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '数据结构与算法',
  titleTemplate: ':title - AntPro',
  description: '使用javascript/typescript学习数据结构与算法，来自AntPro的学习笔记',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'LeetCode 题例', link: '/leet-code-example-list' },
      { text: 'Siykt博客', link: 'https://www.antpro.me/' },
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
