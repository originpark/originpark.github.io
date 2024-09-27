import { link } from "node:fs";
import test from "node:test";
import { text } from "stream/consumers";

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
            text: 'java web基础',
            link: '/note/java_web_basic',
            collapsed: false,
            items: [
              {text: 'Servlet', link: '/note/java_web_basic/Servlet'}
            ]
          }
        ]
      }
    ]
  }