export default {
    '/note/': [
      {
        // collapsed: false,
        text: '个人笔记',
        
        items: [
          {
            text: 'javaSE',
            link: '/note/javaSE',
            collapsed: false,
            items: [
              {text: '集合', link: '/note/javaSE/集合'}
            ]
          },
          {
            text: 'java web',
            link: '/note/java_web_basic',
            collapsed: false,
            items: [
              {text: 'Servlet', link: '/note/java_web_basic/Servlet'},
              {text: 'https', link: '/note/java_web_basic/https'}
            ]
          }
        ]
      }
    ]
  }