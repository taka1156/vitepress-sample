import{o as n,c as s,b as a,d as e}from"./app.44b9eaa0.js";const l='{"title":"0. はじめに","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vitepressってそもそも何?","slug":"vitepressってそもそも何"},{"level":2,"title":"必要なもの","slug":"必要なもの"},{"level":2,"title":"手順","slug":"手順"},{"level":2,"title":"カスタマイズ","slug":"カスタマイズ"},{"level":3,"title":"ナビゲーション","slug":"ナビゲーション"},{"level":3,"title":"サイドバー","slug":"サイドバー"},{"level":3,"title":"markdown構文の拡張","slug":"markdown構文の拡張"},{"level":3,"title":"vueコンポーネントの埋め込み","slug":"vueコンポーネントの埋め込み"},{"level":2,"title":"デプロイ(github actions)","slug":"デプロイ-github-actions"}],"relativePath":"0_docs/index.md","lastUpdated":1630215376926}',t={},r=[a("h1",{id:"_0-はじめに"},[a("a",{class:"header-anchor",href:"#_0-はじめに","aria-hidden":"true"},"#"),e(" 0. はじめに")],-1),a("div",{class:"info custom-block"},[a("p",{class:"custom-block-title"},"What is this?"),a("p",null,"こちらはブログ記事をvitepressに載せたものです")],-1),a("p",null,[a("div",{class:"table-of-contents"},[a("ul",null,[a("li",null,[a("a",{href:"#vitepressってそもそも何"},"Vitepressってそもそも何?")]),a("li",null,[a("a",{href:"#必要なもの"},"必要なもの")]),a("li",null,[a("a",{href:"#手順"},"手順")]),a("li",null,[a("a",{href:"#カスタマイズ"},"カスタマイズ"),a("ul",null,[a("li",null,[a("a",{href:"#ナビゲーション"},"ナビゲーション")]),a("li",null,[a("a",{href:"#サイドバー"},"サイドバー")]),a("li",null,[a("a",{href:"#markdown構文の拡張"},"markdown構文の拡張")]),a("li",null,[a("a",{href:"#vueコンポーネントの埋め込み"},"vueコンポーネントの埋め込み")])])]),a("li",null,[a("a",{href:"#デプロイ-github-actions"},"デプロイ(github actions)")])])])],-1),a("h2",{id:"vitepressってそもそも何"},[a("a",{class:"header-anchor",href:"#vitepressってそもそも何","aria-hidden":"true"},"#"),e(" Vitepressってそもそも何?")],-1),a("p",null,"Vitepressは、vuepressを改善したものなので、vuepressの説明からしたいと思います。",-1),a("ul",null,[a("li",null,[a("p",null,"Vuepress"),a("p",null,[a("a",{href:"./.html"},"マークダウン記法"),e("でお手軽に静的サイトを作成し、vueコンポーネントやCSSによるカスタマイズなども行えるようにしたもの"),a("br"),e(" ドキュメント以外にもブログなどにも使える。")])]),a("li",null,[a("p",null,"Vitepress"),a("p",null,[e("Vuepressで使っていた"),a("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},"Webpack"),e("と呼ばれるビルドツールをVueの作者が作った"),a("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},"Vite"),e("というものに置き換えたもの"),a("br"),a("a",{href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"},"ES Modules"),e("というJSのネイティブの読み込み方式を使うビルドを行うため、Webpackより軽く、軽快な動作になっている")])])],-1),a("h2",{id:"必要なもの"},[a("a",{class:"header-anchor",href:"#必要なもの","aria-hidden":"true"},"#"),e(" 必要なもの")],-1),a("ul",null,[a("li",null,"node.js version"),a("li",null,"VScode")],-1),a("h2",{id:"手順"},[a("a",{class:"header-anchor",href:"#手順","aria-hidden":"true"},"#"),e(" 手順")],-1),a("ol",null,[a("li",null,[a("p",null,[e("新しいディレクトリの作成"),a("br"),a("code",null,"mkdir vite-sample && cd vite-sample")])]),a("li",null,[a("p",null,[e("初期化"),a("br"),a("code",null,"yarn init or npm init")])]),a("li",null,[a("p",null,[a("strong",null,"vitepress"),e("をインストール"),a("br"),a("code",null,"yarn add --dev vitepress or npm install --dev vitepress")])]),a("li",null,[a("p",null,[a("code",null,"package.json"),e("に以下のscriptsを記載")]),a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),e("\n     "),a("span",{class:"token property"},'"name"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"vite-sample"'),a("span",{class:"token punctuation"},","),e("\n     "),a("span",{class:"token property"},'"version"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"1.0.0"'),a("span",{class:"token punctuation"},","),e("\n     "),a("span",{class:"token property"},'"license"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"MIT"'),a("span",{class:"token punctuation"},","),e("\n     "),a("span",{class:"token property"},'"scripts"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"{"),e("\n         "),a("span",{class:"token property"},'"docs:dev"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"vitepress dev docs"'),a("span",{class:"token punctuation"},","),e("\n         "),a("span",{class:"token property"},'"docs:build"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"vitepress build docs"'),a("span",{class:"token punctuation"},","),e("\n         "),a("span",{class:"token property"},'"docs:serve"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"vitepress serve docs"'),e("\n     "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n     "),a("span",{class:"token property"},'"devDependencies"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"{"),e("\n         "),a("span",{class:"token property"},'"vitepress"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"^0.16.1"'),e("\n     "),a("span",{class:"token punctuation"},"}"),e("\n "),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br")])])]),a("li",null,[a("p",null,[e("以下を実行し、初期ファイルを作成(エディターのUIから作成してもOK)"),a("br")]),a("div",{class:"language-shell line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token function"},"mkdir"),e(" docs docs/.vitepress\n"),a("span",{class:"token function"},"touch"),e(" docs/.vitepress/config.js\n"),a("span",{class:"token function"},"touch"),e(" docs/index.md\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])])]),a("li",null,[a("p",null,[e("以下のようなディレクトリ構成になっていれば準備完了"),a("br"),a("img",{src:"/vitepress-sample/article/vitepres-dir-tree.png",alt:"vitepressディレクトリ構成"})]),a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"項目"),a("th",null,"説明")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"config.js")]),a("td",null,[e("Viteの設定情報を書き込むファイル。"),a("br"),e("headやsidebar、navigationの情報もここで記載すると自動で作成される。")])]),a("tr",null,[a("td",null,[a("code",null,"index.md")]),a("td",null,[e("トップページとなるファイル。"),a("br"),e("他のページとは違い、markdownの先頭に、yaml形式のトップページ専用のデータを挿入することができる。")])])])])])],-1),a("h2",{id:"カスタマイズ"},[a("a",{class:"header-anchor",href:"#カスタマイズ","aria-hidden":"true"},"#"),e(" カスタマイズ")],-1),a("p",null,"このままでは少し扱いづらいので、フォルダをさらに追加します。",-1),a("ol",null,[a("li",null,[a("p",null,"以下を実行し、初期ディレクトリを作成(エディターのUIから作成してもOK)"),a("div",{class:"language-shell line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token function"},"mkdir"),e(" docs/public docs/constants\n"),a("span",{class:"token function"},"mkdir"),e(" docs/.vitepress/components docs/.vitepress/theme\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br")])]),a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"項目"),a("th",null,"説明")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"public")]),a("td",null,"OGPやmarkdown内で使用する画像を置いておく")]),a("tr",null,[a("td",null,[a("code",null,"constants")]),a("td",null,"編集者一覧などまとめて管理したいものを定義するファイルを置いておく")]),a("tr",null,[a("td",null,[a("code",null,"components")]),a("td",null,"markdown内で使用したいコンポーネントを置いておく")])])]),a("p",null,[a("strong",null,"public"),e("についてはさらに"),a("strong",null,"article(blog)、site、writers"),e("ディレクトリを作成するとわかりやすくなるかもしれません。")])])],-1),a("h3",{id:"ナビゲーション"},[a("a",{class:"header-anchor",href:"#ナビゲーション","aria-hidden":"true"},"#"),e(" ナビゲーション")],-1),a("h3",{id:"サイドバー"},[a("a",{class:"header-anchor",href:"#サイドバー","aria-hidden":"true"},"#"),e(" サイドバー")],-1),a("h3",{id:"markdown構文の拡張"},[a("a",{class:"header-anchor",href:"#markdown構文の拡張","aria-hidden":"true"},"#"),e(" markdown構文の拡張")],-1),a("p",null,[e("内部のmarkdown処理には、"),a("a",{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},"markdown-it"),e("が使われているため、"),a("br"),e(" その周辺モジュールであれば、大抵のものは使えると思います。")],-1),a("p",null,[e("今回は例として、"),a("a",{href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},"markdown-it-container"),e("を使用します")],-1),a("h3",{id:"vueコンポーネントの埋め込み"},[a("a",{class:"header-anchor",href:"#vueコンポーネントの埋め込み","aria-hidden":"true"},"#"),e(" vueコンポーネントの埋め込み")],-1),a("h2",{id:"デプロイ-github-actions"},[a("a",{class:"header-anchor",href:"#デプロイ-github-actions","aria-hidden":"true"},"#"),e(" デプロイ(github actions)")],-1),a("p",null,"github actionsを利用して、自動デプロイを行ってみましょう。",-1),a("ol",null,[a("li",null,[a("p",null,[e("ワークフローを格納するディレクトリを作成する"),a("br"),a("code",null,"mkdir .github .github/workflows")])]),a("li",null,[a("p",null,[e("yarmlを作成"),a("br"),a("code",null,"tocuh .github/workflows/main.yaml")])]),a("li",null,[a("p",null,[e("yarmlの中身を以下のようにする"),a("br")]),a("div",{class:"language-yaml line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" gh"),a("span",{class:"token punctuation"},"-"),e("page deploy\n\n"),a("span",{class:"token comment"},"# masterにpushした時"),e("\n "),a("span",{class:"token key atrule"},"on"),a("span",{class:"token punctuation"},":"),e("\n  "),a("span",{class:"token key atrule"},"push"),a("span",{class:"token punctuation"},":"),e("\n     "),a("span",{class:"token key atrule"},"branches"),a("span",{class:"token punctuation"},":"),e("\n     "),a("span",{class:"token punctuation"},"-"),e(" master\n\n "),a("span",{class:"token comment"},"# 動かす環境や走らせて欲しいコマンドなど"),e("\n "),a("span",{class:"token key atrule"},"jobs"),a("span",{class:"token punctuation"},":"),e("\n  "),a("span",{class:"token key atrule"},"build-deploy"),a("span",{class:"token punctuation"},":"),e("\n   "),a("span",{class:"token key atrule"},"runs-on"),a("span",{class:"token punctuation"},":"),e(" ubuntu"),a("span",{class:"token punctuation"},"-"),a("span",{class:"token number"},"18.04"),e("\n     "),a("span",{class:"token key atrule"},"steps"),a("span",{class:"token punctuation"},":"),e("\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"uses"),a("span",{class:"token punctuation"},":"),e(" actions/checkout@v2\n\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" setup node\n       "),a("span",{class:"token key atrule"},"uses"),a("span",{class:"token punctuation"},":"),e(" actions/setup"),a("span",{class:"token punctuation"},"-"),e("node@v1\n       "),a("span",{class:"token key atrule"},"with"),a("span",{class:"token punctuation"},":"),e("\n         "),a("span",{class:"token key atrule"},"node-version"),a("span",{class:"token punctuation"},":"),e(),a("span",{class:"token string"},"'14.x'"),e("\n\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" Cache dependencies\n       "),a("span",{class:"token key atrule"},"uses"),a("span",{class:"token punctuation"},":"),e(" actions/cache@v2\n       "),a("span",{class:"token key atrule"},"with"),a("span",{class:"token punctuation"},":"),e("\n         "),a("span",{class:"token key atrule"},"path"),a("span",{class:"token punctuation"},":"),e(" ~/.cache/yarn\n         "),a("span",{class:"token key atrule"},"key"),a("span",{class:"token punctuation"},":"),e(" $"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"{"),e(" runner.os "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"-"),e("node"),a("span",{class:"token punctuation"},"-"),e("$"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"{"),e(" hashFiles('"),a("span",{class:"token important"},"**/yarn.lock')"),e(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),e("\n         "),a("span",{class:"token key atrule"},"restore-keys"),a("span",{class:"token punctuation"},":"),e(),a("span",{class:"token punctuation"},"|"),a("span",{class:"token scalar string"},"\n             ${{ runner.os }}-node-"),e("\n\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" install\n       "),a("span",{class:"token key atrule"},"if"),a("span",{class:"token punctuation"},":"),e(" steps.cache.outputs.cache"),a("span",{class:"token punctuation"},"-"),e("hit "),a("span",{class:"token tag"},"!="),e(" 'true'\n       "),a("span",{class:"token key atrule"},"run"),a("span",{class:"token punctuation"},":"),e(" yarn install\n\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" build\n       "),a("span",{class:"token key atrule"},"run"),a("span",{class:"token punctuation"},":"),e(" yarn docs"),a("span",{class:"token punctuation"},":"),e("build\n\n     "),a("span",{class:"token punctuation"},"-"),e(),a("span",{class:"token key atrule"},"name"),a("span",{class:"token punctuation"},":"),e(" deploy\n       "),a("span",{class:"token key atrule"},"uses"),a("span",{class:"token punctuation"},":"),e(" peaceiris/actions"),a("span",{class:"token punctuation"},"-"),e("gh"),a("span",{class:"token punctuation"},"-"),e("pages@v3\n       "),a("span",{class:"token key atrule"},"with"),a("span",{class:"token punctuation"},":"),e("\n         "),a("span",{class:"token key atrule"},"github_token"),a("span",{class:"token punctuation"},":"),e(" $"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"{"),e(" secrets.GITHUB_TOKEN "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),e("\n         "),a("span",{class:"token key atrule"},"publish_dir"),a("span",{class:"token punctuation"},":"),e(" ./dist\n\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br"),a("span",{class:"line-number"},"26"),a("br"),a("span",{class:"line-number"},"27"),a("br"),a("span",{class:"line-number"},"28"),a("br"),a("span",{class:"line-number"},"29"),a("br"),a("span",{class:"line-number"},"30"),a("br"),a("span",{class:"line-number"},"31"),a("br"),a("span",{class:"line-number"},"32"),a("br"),a("span",{class:"line-number"},"33"),a("br"),a("span",{class:"line-number"},"34"),a("br"),a("span",{class:"line-number"},"35"),a("br"),a("span",{class:"line-number"},"36"),a("br"),a("span",{class:"line-number"},"37"),a("br"),a("span",{class:"line-number"},"38"),a("br"),a("span",{class:"line-number"},"39"),a("br"),a("span",{class:"line-number"},"40"),a("br"),a("span",{class:"line-number"},"41"),a("br")])])])],-1)];t.render=function(a,e,l,t,u,p){return n(),s("div",null,r)};export{l as __pageData,t as default};
