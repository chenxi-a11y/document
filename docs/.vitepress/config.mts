// 1. 安装依赖
// npm install vitepress-plugin-pagefind pagefind --save-dev

// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  base: '/document/', 
  lang: 'zh-CN',
  title: "Tatsumi",
  description: "Tatsumi",
  
  // 添加 pagefind 插件
  vite: {
    plugins: [pagefindPlugin({
      btnPlaceholder: '搜索',
      placeholder: '搜索文档',
      emptyText: '空空如也',
      heading: '共: {{searchResult}} 条结果',
      // 自定义搜索框样式
      customSearchQuery(input) {
        // 你可以在这里自定义搜索逻辑
        return input.toLowerCase()
      }
    })]
  },
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/Outline' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    
    // 多侧边栏配置
    sidebar: {
      // 默认侧边栏（首页和其他页面）
      '/': [
        {
          text: '开始',
          items: [
            { text: '第一页', link: '/blog1/1' },
            { text: '第二页', link: '/api-examples' }
          ]
        }
      ],
      // 当用户位于 `blog1` 目录时，显示此侧边栏
      '/blog1/': [
        {
          text: 'Blog1 指南',
          items: [
            { text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '第一篇文章', link: '/blog1/1' },
            { text: '第二篇文章', link: '/blog1/2' },
            { text: '第三篇文章', link: '/blog1/3' },
			{ text: '退出', link: '/Outline' }
          ]
        }
      ],
      // 可以继续添加其他目录的侧边栏
      '/blog2/': [
        {
          text: 'Blog2 指南',
          items: [
            { text: '文章A', link: '/blog2/a' },
            { text: '文章B', link: '/blog2/b' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})