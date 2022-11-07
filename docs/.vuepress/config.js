module.exports = {
  title: 'web-handbook',
  description: 'web-handbook',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '笑忘书的 JavaScript 博客',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
  sidebar: [
    {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "学前必读", path: "/" }
        ]
    },
    {
      title: "基础学习",
 path: '/md/原型和原型链',
      collapsable: false, // 不折叠
      children: [
        { title: "原型和原型链", path: "/md/原型和原型链.md" },
        { title: "作用域链", path: "/md/作用域链.md" },
        { title: "闭包", path: "/md/闭包.md" },
      ],
    }
  ]},
  theme: 'reco',
  base: '/vuepress',




}