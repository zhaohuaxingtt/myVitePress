import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir:"docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '知识点',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    //固定的几个模式
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search:{
      provider: 'local',
    },
    lastUpdated:{
      text:'最后更改时间',
      formatOptions:{
        dateStyle:'full',
        timeStyle:'short'
      }
    },
    docFooter:{
      prev:"上一页",  
      next:"下一页"
    }
  }
})
