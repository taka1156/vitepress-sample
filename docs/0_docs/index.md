# 0. はじめに

::: info What is this?
 こちらはブログ記事をvitepressに載せたものです
:::

[[toc]]

## Vitepressってそもそも何?

Vitepressは、vuepressを改善したものなので、vuepressの説明からしたいと思います。

- Vuepress
  
    [マークダウン記法]()でお手軽に静的サイトを作成し、vueコンポーネントやCSSによるカスタマイズなども行えるようにしたもの<br>
    ドキュメント以外にもブログなどにも使える。

- Vitepress
  
    Vuepressで使っていた[Webpack](https://webpack.js.org/)と呼ばれるビルドツールをVueの作者が作った[Vite](https://vitejs.dev/)というものに置き換えたもの<br>
    [ES Modules](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)というJSのネイティブの読み込み方式を使うビルドを行うため、Webpackより軽く、軽快な動作になっている


## 必要なもの

- node.js version
- VScode

## 手順
1. 新しいディレクトリの作成<br>
   `mkdir vite-sample && cd vite-sample`

2. 初期化<br>
   `yarn init or npm init`

3. **vitepress**をインストール<br>
   `yarn add --dev vitepress or npm install --dev vitepress`

4. `package.json`に以下のscriptsを記載
   ```json
   {
        "name": "vite-sample",
        "version": "1.0.0",
        "license": "MIT",
        "scripts": {
            "docs:dev": "vitepress dev docs",
            "docs:build": "vitepress build docs",
            "docs:serve": "vitepress serve docs"
        },
        "devDependencies": {
            "vitepress": "^0.16.1"
        }
    }
   ```

5. 以下を実行し、初期ファイルを作成(エディターのUIから作成してもOK)<br>
   ```shell
   mkdir docs docs/.vitepress
   touch docs/.vitepress/config.js
   touch docs/index.md
   ```

6. 以下のようなディレクトリ構成になっていれば準備完了<br>
   ![vitepressディレクトリ構成](/article/vitepres-dir-tree.png)
   
    |項目|説明|
    |---|---|
    |`config.js`|Viteの設定情報を書き込むファイル。<br>headやsidebar、navigationの情報もここで記載すると自動で作成される。|
    |`index.md`|トップページとなるファイル。<br>他のページとは違い、markdownの先頭に、yaml形式のトップページ専用のデータを挿入することができる。|


## カスタマイズ
このままでは少し扱いづらいので、フォルダをさらに追加します。

1. 以下を実行し、初期ディレクトリを作成(エディターのUIから作成してもOK)
   ```shell
   mkdir docs/public docs/constants
   mkdir docs/.vitepress/components docs/.vitepress/theme
   ```

    |項目|説明|
    |---|---|
    |`public`|OGPやmarkdown内で使用する画像を置いておく|
    |`constants`|編集者一覧などまとめて管理したいものを定義するファイルを置いておく|
    |`components`|markdown内で使用したいコンポーネントを置いておく|

    **public**についてはさらに**article(blog)、site、writers**ディレクトリを作成するとわかりやすくなるかもしれません。

### ナビゲーション

### サイドバー

### markdown構文の拡張

内部のmarkdown処理には、[markdown-it](https://github.com/markdown-it/markdown-it)が使われているため、<br>
その周辺モジュールであれば、大抵のものは使えると思います。

今回は例として、[markdown-it-container](https://github.com/markdown-it/markdown-it-container)を使用します

### vueコンポーネントの埋め込み

## デプロイ(github actions)

github actionsを利用して、自動デプロイを行ってみましょう。

1. ワークフローを格納するディレクトリを作成する<br>
   `mkdir .github .github/workflows`

2. yarmlを作成<br>
   `tocuh .github/workflows/main.yaml`

3. yarmlの中身を以下のようにする<br>
   ``` yaml
   name: gh-page deploy
   
   # masterにpushした時
    on:
     push:
        branches:
        - master

    # 動かす環境や走らせて欲しいコマンドなど
    jobs:
     build-deploy:
      runs-on: ubuntu-18.04
        steps:
        - uses: actions/checkout@v2

        - name: setup node
          uses: actions/setup-node@v1
          with:
            node-version: '14.x'

        - name: Cache dependencies
          uses: actions/cache@v2
          with:
            path: ~/.cache/yarn
            key: ${{ runner.os }}-node-${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
                ${{ runner.os }}-node-

        - name: install
          if: steps.cache.outputs.cache-hit != 'true'
          run: yarn install

        - name: build
          run: yarn docs:build

        - name: deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./dist

   ```
