# 2. markdown-itの構文

[[toc]]

## markdoen-it-container

::: tip ポイント
  tips表示
:::

::: info 情報
  info表示
:::

::: warning 注意
  worning表示
:::

::: danger 危険
  danger表示
:::

### 拡張

::: spoiler アコーディオン
　隠したいテキスト
:::

::: spoiler spoilerの実装

```js
const containerMdExtend = (md) => ({
    validate: function (params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
    },

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

        if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
        } else {
        // closing tag
        return '</details>\n';
        }
    },
});

module.exports = containerMdExtend;
```
:::


```md

::: tip ポイント
    tips表示
:::

::: info 情報
  info表示
:::

::: warning 注意
    worning表示
:::

::: danger 危険
    danger表示
:::

::: spoiler アコーディオン
　隠したいテキスト
:::

```

## markdown-it-lists

- [ ] タスク1
- [x] タスク2

```markdown
- [ ] タスク1
- [x] タスク2
```
