// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
var config_default = defineUserConfig({
  title: "\u4E2A\u4EBA\u77E5\u8BC6\u5E93",
  description: "\u4E2A\u4EBA\u6574\u7406markdown\u77E5\u8BC6\u5E93\uFF0C\u5305\u542B\u77E5\u8BC6\u70B9\uFF0C\u9762\u7ECF\u4E0E\u89E3\u51B3\u65B9\u6848",
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
        "webgis"
      ]
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
        "text": "\u4E3B\u9875",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "\u535A\u5BA2",
        "link": "/posts.html",
        "icon": "reco-date"
      },
      {
        "text": "\u65F6\u95F4\u8F74",
        "link": "/timeline.html",
        "icon": "reco-date"
      },
      {
        "text": "\u77E5\u8BC6\u70B9",
        "icon": "reco-message",
        "children": [
          {
            "text": "\u524D\u7AEF\u77E5\u8BC6\u70B9",
            "link": "/docs/knowledge/"
          },
          {
            "text": "\u8BA1\u7B97\u673A\u57FA\u7840",
            "link": "/docs/computer/"
          },
          {
            "text": "\u5176\u4ED6\u6280\u672F\u6808",
            "link": "/docs/others/"
          }
        ]
      },
      {
        "text": "\u5916\u90E8\u94FE\u63A5",
        "icon": "reco-message",
        "children": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/kasnars",
            "icon": "reco-mayun"
          },
          {
            "text": "\u7A00\u571F\u6398\u91D1",
            "link": "https://juejin.cn/user/2287450072292567",
            "icon": "reco-juejin"
          }
        ]
      },
      {
        "text": "\u9762\u8BD5\u8BB0\u5F55",
        "link": "/interview/202502",
        "icon": "reco-date"
      }
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
      type: "valine",
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: "7U9I2lud28rt2J3cQptUGPL3-gzGzoHsz",
        appKey: "Q3GItuVLrrpGxeoSOaHVNrei"
        // placeholder: 'kasnars@163.com',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: false // 隐藏评论
      }
    }
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2NvZGUvdnVlcHJlc3MtcmVjby1ibG9nLTIuMC8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdnVlcHJlc3MtcmVjby1ibG9nLTIuMFxcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3Z1ZXByZXNzLXJlY28tYmxvZy0yLjAvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHJlY29UaGVtZSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiO1xyXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcbmltcG9ydCB7IHdlYnBhY2tCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItd2VicGFjaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIHRpdGxlOiBcIlx1NEUyQVx1NEVCQVx1NzdFNVx1OEJDNlx1NUU5M1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlx1NEUyQVx1NEVCQVx1NjU3NFx1NzQwNm1hcmtkb3duXHU3N0U1XHU4QkM2XHU1RTkzXHVGRjBDXHU1MzA1XHU1NDJCXHU3N0U1XHU4QkM2XHU3MEI5XHVGRjBDXHU5NzYyXHU3RUNGXHU0RTBFXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4XCIsXHJcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcclxuICBoZWFkOiBbXHJcbiAgICBbXHJcbiAgICAgIFwibGlua1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJyZWxcIjogXCJpY29uXCIsXHJcbiAgICAgICAgXCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJtZXRhXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJ2aWV3cG9ydFwiLFxyXG4gICAgICAgIFwiY29udGVudFwiOiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICBdLFxyXG4gIC8vIGJ1bmRsZXI6IHdlYnBhY2tCdW5kbGVyKCksXHJcbiAgdGhlbWU6IHJlY29UaGVtZSh7XHJcbiAgICBsb2dvOiBcIi9uZXdsb2dvLmpwZ1wiLFxyXG4gICAgYXV0aG9yOiBcIkthc25hcnNcIixcclxuICAgIGF1dGhvckF2YXRhcjogXCIvbmV3aGVhZC5qcGdcIixcclxuICAgIC8vIGRvY3NSZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92dWVwcmVzcy1yZWNvL3Z1ZXByZXNzLXRoZW1lLXJlY28tbmV4dFwiLFxyXG4gICAgLy8gZG9jc0JyYW5jaDogXCJtYWluXCIsXHJcbiAgICBkb2NzRGlyOiBcImRvY3NcIixcclxuICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcIixcclxuICAgIC8vIHNlcmllcyBcdTRFM0FcdTUzOUYgc2lkZWJhclxyXG4gICAgc2VyaWVzOiB7XHJcbiAgICAgIFwiL2RvY3Mva25vd2xlZGdlL1wiOiBbXHJcbiAgICAgICAgXCJodG1sY3NzXCIsXHJcbiAgICAgICAgXCJqc1wiLFxyXG4gICAgICAgIFwidHNcIixcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwicmVhY3RcIixcclxuICAgICAgICBcInVuaWFwcFwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiL2RvY3MvY29tcHV0ZXIvXCI6IFtcclxuICAgICAgICBcImNvbXB1dGVyQmFzZVwiLFxyXG4gICAgICAgIFwiaW50ZXJuZXRcIixcclxuICAgICAgICBcImRhdGFTdHJ1Y3R1cmVcIixcclxuICAgICAgICBcImFsZ29yaXRobVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiL2RvY3Mvb3RoZXJzL1wiOiBbXHJcbiAgICAgICAgXCJ3ZWJnaXNcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBuYXZiYXI6IFtcclxuICAgICAgLy8geyB0ZXh0OiBcIkhvbWVcIiwgbGluazogXCIvXCIgfSxcclxuICAgICAgLy8geyB0ZXh0OiBcIkNhdGVnb3JpZXNcIiwgbGluazogXCIvY2F0ZWdvcmllcy9yZWNvLzEuaHRtbFwiIH0sXHJcbiAgICAgIC8vIHsgdGV4dDogXCJUYWdzXCIsIGxpbms6IFwiL3RhZ3MvdGFnMS8xLmh0bWxcIiB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgdGV4dDogXCJEb2NzXCIsXHJcbiAgICAgIC8vICAgY2hpbGRyZW46IFtcclxuICAgICAgLy8gICAgIC8vIHsgdGV4dDogXCJ2dWVwcmVzcy1yZWNvXCIsIGxpbms6IFwiL2RvY3MvdGhlbWUtcmVjby90aGVtZVwiIH0sXHJcbiAgICAgIC8vICAgICAvLyB7IHRleHQ6IFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiLCBsaW5rOiBcIi9ibG9ncy9vdGhlci9ndWlkZVwiIH0sXHJcbiAgICAgIC8vICAgXSxcclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIlx1NEUzQlx1OTg3NVwiLFxyXG4gICAgICAgIFwibGlua1wiOiBcIi9cIixcclxuICAgICAgICBcImljb25cIjogXCJyZWNvLWhvbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwiXHU1MzVBXHU1QkEyXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgICAgICBcImljb25cIjogXCJyZWNvLWRhdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwiXHU2NUY2XHU5NUY0XHU4Rjc0XCIsXHJcbiAgICAgICAgXCJsaW5rXCI6IFwiL3RpbWVsaW5lLmh0bWxcIixcclxuICAgICAgICBcImljb25cIjogXCJyZWNvLWRhdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwiXHU3N0U1XHU4QkM2XHU3MEI5XCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwicmVjby1tZXNzYWdlXCIsXHJcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlx1NTI0RFx1N0FFRlx1NzdFNVx1OEJDNlx1NzBCOVwiLFxyXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvZG9jcy9rbm93bGVkZ2UvXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MFwiLFxyXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvZG9jcy9jb21wdXRlci9cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU1MTc2XHU0RUQ2XHU2MjgwXHU2NzJGXHU2ODA4XCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9kb2NzL290aGVycy9cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJcdTU5MTZcdTkwRThcdTk0RkVcdTYzQTVcIixcclxuICAgICAgICBcImljb25cIjogXCJyZWNvLW1lc3NhZ2VcIixcclxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiR2l0ZWVcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRlZS5jb20va2FzbmFyc1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJyZWNvLW1heXVuXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlx1N0EwMFx1NTcxRlx1NjM5OFx1OTFEMVwiLFxyXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL2p1ZWppbi5jbi91c2VyLzIyODc0NTAwNzIyOTI1NjdcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwicmVjby1qdWVqaW5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIlx1OTc2Mlx1OEJENVx1OEJCMFx1NUY1NVwiLFxyXG4gICAgICAgIFwibGlua1wiOiBcIi9pbnRlcnZpZXcvMjAyNTAyXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwicmVjby1kYXRlXCJcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBidWxsZXRpbjoge1xyXG4gICAgLy8gICBib2R5OiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBgXHVEODNDXHVERjg5XHVEODNDXHVERjg5XHVEODNDXHVERjg5IHJlY28gXHU0RTNCXHU5ODk4IDIueCBcdTVERjJcdTdFQ0ZcdTYzQTVcdThGRDEgQmV0YSBcdTcyNDhcdTY3MkNcdUZGMENcdTU3MjhcdTUzRDFcdTVFMDMgTGF0ZXN0IFx1NzI0OFx1NjcyQ1x1NEU0Qlx1NTI0RFx1NEUwRFx1NEYxQVx1NTE4RFx1NjcwOVx1NTkyN1x1NzY4NFx1NjZGNFx1NjVCMFx1RkYwQ1x1NTkyN1x1NUJCNlx1NTNFRlx1NEVFNVx1NUMzRFx1NjBDNVx1NUMxRFx1OUM5Q1x1NEU4Nlx1RkYwQ1x1NUU3Nlx1NEUxNFx1NUUwQ1x1NjcxQlx1NTkyN1x1NUJCNlx1NTcyOCBRUSBcdTdGQTRcdTU0OEMgR2l0SHViIFx1OEUwQVx1OERDM1x1NTNDRFx1OTk4OFx1NEY3Rlx1NzUyOFx1NEY1M1x1OUE4Q1x1RkYwQ1x1NjIxMVx1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NjVGNlx1OTVGNFx1NTRDRFx1NUU5NFx1MzAwMmAsXHJcbiAgICAvLyAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDEycHg7XCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcImhyXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcInRpdGxlXCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBcIlFRIFx1N0ZBNFwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBgXHJcbiAgICAvLyAgICAgICA8dWw+XHJcbiAgICAvLyAgICAgICAgIDxsaT5RUVx1N0ZBNDFcdUZGMUExMDM3Mjk2MTA0PC9saT5cclxuICAgIC8vICAgICAgICAgPGxpPlFRXHU3RkE0Mlx1RkYxQTEwNjE1NjEzOTU8L2xpPlxyXG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQzXHVGRjFBOTYyNjg3ODAyPC9saT5cclxuICAgIC8vICAgICAgIDwvdWw+YCxcclxuICAgIC8vICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMTJweDtcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwiaHJcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwidGl0bGVcIixcclxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR2l0SHViXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcclxuICAgIC8vICAgICAgIDx1bD5cclxuICAgIC8vICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtcmVjby92dWVwcmVzcy10aGVtZS1yZWNvLW5leHQvaXNzdWVzXCI+SXNzdWVzPGEvPjwvbGk+XHJcbiAgICAvLyAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzLXJlY28vdnVlcHJlc3MtdGhlbWUtcmVjby1uZXh0L2Rpc2N1c3Npb25zLzFcIj5EaXNjdXNzaW9uczxhLz48L2xpPlxyXG4gICAgLy8gICAgICAgPC91bD5gLFxyXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJidXR0b25ncm91cFwiLFxyXG4gICAgLy8gICAgICAgY2hpbGRyZW46IFtcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU2MjUzXHU4RDRGXCIsXHJcbiAgICAvLyAgICAgICAgICAgbGluazogXCIvZG9jcy9vdGhlcnMvZG9uYXRlLmh0bWxcIixcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgIF0sXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vIH0sXHJcbiAgICBjb21tZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6ICd2YWxpbmUnLFxyXG4gICAgICAvLyBvcHRpb25zIFx1NEUwRSAxLnggXHU3Njg0IHZhbGluZUNvbmZpZyBcdTkxNERcdTdGNkVcdTRFMDBcdTgxRjRcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFwcElkOiAnN1U5STJsdWQyOHJ0MkozY1FwdFVHUEwzLWd6R3pvSHN6JyxcclxuICAgICAgICBhcHBLZXk6ICdRM0dJdHVWTHJycEd4ZW9TT2FIVk5yZWknLFxyXG4gICAgICAgIC8vIHBsYWNlaG9sZGVyOiAna2FzbmFyc0AxNjMuY29tJyxcclxuICAgICAgICAvLyB2ZXJpZnk6IHRydWUsIC8vIFx1OUE4Q1x1OEJDMVx1NzgwMVx1NjcwRFx1NTJBMVxyXG4gICAgICAgIC8vIG5vdGlmeTogdHJ1ZSxcclxuICAgICAgICAvLyByZWNvcmRJUDogdHJ1ZSxcclxuICAgICAgICAvLyBoaWRlQ29tbWVudHM6IGZhbHNlIC8vIFx1OTY5MFx1ODVDRlx1OEJDNFx1OEJCQVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuICAvLyBkZWJ1ZzogdHJ1ZSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVMsU0FBUyx3QkFBd0I7QUFDdFUsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsbUJBQW1CO0FBRzVCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUyxZQUFZO0FBQUEsRUFDckIsTUFBTTtBQUFBLElBQ0o7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE9BQU8sVUFBVTtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBO0FBQUE7QUFBQSxJQUdkLFNBQVM7QUFBQSxJQUNULGlCQUFpQjtBQUFBO0FBQUEsSUFFakIsUUFBUTtBQUFBLE1BQ04sb0JBQW9CO0FBQUEsUUFDbEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLG1CQUFtQjtBQUFBLFFBQ2pCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUVBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF1REEsZUFBZTtBQUFBLE1BQ2IsTUFBTTtBQUFBO0FBQUEsTUFFTixTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVY7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUE7QUFFSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
