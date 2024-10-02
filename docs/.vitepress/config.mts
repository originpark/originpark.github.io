// import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  // appearance: 'force-dark',
  mermaid: {
  },
  mermaidPlugin: {
    class: 'mermaid my-class'
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  lang: 'zh-CN',
  srcDir: 'src',
  title: "OriginPark",
  titleTemplate: "OriginPark",
  head: [['link', {rel: 'icon', href: '/images/logo.ico'}]],
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    outline: {
      label: '页面导航'
    },
    nav: [
      {
        text: '个人笔记',
        items: [
          {
            text: 'javaSE',
            link: '/note/javaSE'
          },
          {
            text: 'java web',
            link: '/note/java_web_basic'
          }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' },
      
    ],
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/originpark' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/160304257' }
    ]
  }
})


