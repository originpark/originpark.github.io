import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
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
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      {
        text: '个人笔记',
        items: [
          {
            text: 'javaSE',
            link: '/note/javaSE'
          }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' },
      
    ],

    sidebar: {
      '/note/': [
        {
          collapsed: false,
          
          text: '个人笔记',
          items: [
            {
              text: 'javaSE',
              collapsed: true,
              link: '/note/javaSE',
              items: [
                {text: '集合', link: '/note/javaSE/集合'}
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/originpark' }
    ]
  }
})
