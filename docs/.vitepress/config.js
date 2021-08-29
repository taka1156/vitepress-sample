const containerMdExtend = require('./plugins/md/index.js');

module.exports = {
  lang: 'ja',
  title: 'Welcome to VitePress',
  description: 'VitePressのサンプルページ',
  head: [
    [
      'meta',
      { property: 'og:image', content: '/vitepress-sample/site/logo.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/vitepress-sample/site/logo.png',
      },
    ],
  ],
  base: '/vitepress-sample/',
  themeConfig: {
    repo: 'taka1156/vitepress-sample',
    logo: '/site/logo-min.png',
    editLinks: true,
    editLinkText: 'このページをgithubで編集',
    lastUpdate: '最終更新',
    docsDir: 'docs',
    docsBranch: 'master',

    nav: [
      {
        text: 'NAVI',
        items: [
          { text: '0. はじめに', link: '/0_docs/' },
          { text: '1. デフォルトmarkdown構文', link: '/1_usefulmd/' },
          { text: '2. markdown-it構文', link: '/1_usefulmd/markdownit' },
          { text: '編集者、管理者一覧', link: '/0_docs/writers' },
        ],
      },
      {
        text: '公式リンク',
        items: [
          {
            text: 'VitePress',
            link: 'https://vitepress.vuejs.org',
          },
          {
            text: 'Vite',
            link: 'https://vitejs.dev/',
          },
          {
            text: 'Vue',
            link: 'https://v3.ja.vuejs.org/',
          },
          {
            text: 'github pages',
            link: 'https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages',
          },
        ],
      },
      {
        text: 'コミュニティ',
        items: [
          {
            text: 'vuejs-jp',
            link: 'https://vuejs-jp.org/',
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        { text: '0. はじめに', link: '/0_docs/' },
        { text: '1. デフォルトmarkdown構文', link: '/1_usefulmd/' },
        { text: '2. markdown-it構文', link: '/1_usefulmd/markdownit' },
        { text: '編集者、管理者一覧', link: '/0_docs/writers' },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(
        require('markdown-it-container'),
        'spoiler',
        containerMdExtend(md)
      );
      md.use(require('markdown-it-task-lists'));
    },
  },
};
