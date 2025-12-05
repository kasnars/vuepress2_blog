import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "个人在线笔记",
  description: "个人整理markdown知识库，包含知识点，面经与解决方案",
  bundler: viteBundler(),
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/newlogo.jpg",
    author: "Kasnars",
    authorAvatar: "/newhead.jpg",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    docsDir: "docs",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/knowledge/": [
        "htmlcss",
        "js",
        "ts",
        "vue",
        "react",
        "uniapp"
      ],
      "/docs/computer/": [
        "computerBase",
        "internet",
        "dataStructure",
        "algorithm"
      ],
      "/docs/others/": [
        "webgis",
      ],
    },
    navbar: [
      // { text: "Home", link: "/" },
      // { text: "Categories", link: "/categories/reco/1.html" },
      // { text: "Tags", link: "/tags/tag1/1.html" },
      // {
      //   text: "Docs",
      //   children: [
      //     // { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     // { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "博客",
        "link": "/posts.html",
        "icon": "reco-date"
      },
      {
        "text": "时间轴",
        "link": "/timeline.html",
        "icon": "reco-date"
      },
      {
        "text": "知识点",
        "icon": "reco-message",
        "children": [
          {
            "text": "前端知识点",
            "link": "/docs/knowledge/"
          },
          {
            "text": "计算机基础",
            "link": "/docs/computer/"
          },
          {
            "text": "其他技术栈",
            "link": "/docs/others/"
          }
        ]
      },

      {
        "text": "外部链接",
        "icon": "reco-message",
        "children": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/kasnars",
            "icon": "reco-mayun"
          },
          {
            "text": "稀土掘金",
            "link": "https://juejin.cn/user/2287450072292567",
            "icon": "reco-juejin"
          }
        ]
      },
      {
        "text": "面试记录",
        "link": "/interview/202502",
        "icon": "reco-date"
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    commentConfig: {
      type: 'valine',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: '7U9I2lud28rt2J3cQptUGPL3-gzGzoHsz',
        appKey: 'Q3GItuVLrrpGxeoSOaHVNrei',
        // placeholder: 'kasnars@163.com',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: false // 隐藏评论
      },
    },
  }),
  // debug: true,
});
