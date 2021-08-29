# 1. 使えるmarkdown構文

[[toc]]

## 文字修飾

#### これはH4タグです

##### これはH5タグです

###### これはH6タグです

```markdown

#### これはH4タグです

##### これはH5タグです

###### これはH6タグです

```

## 強調(bold,　italic)

*hoge*

_hoge_

**hoge**

__hoge__

```markdown
*hoge*

_hoge_

**hoge**

__hoge__
```

## 打ち消し

~~hoge~~

```markdown
~~hoge~~
```

## リスト

文頭に「*」「+」「-」をいれるとリストになる

* hoge

    * hoge

* hoge

+ hoge

    + hoge

+ hoge

- hoge

    - hoge

- hoge

```markdown
* hoge

    * hoge

* hoge


+ hoge

    + hoge

+ hoge

- hoge

    - hoge

- hoge
```

## Decimal型

1. hoge
   1. hoge
   1. hoge
1. hoge
    1. hoge
    1. hoge
1. hoge
    1. hoge
    1. hoge

```markdown
1. hoge
   1. hoge
   1. hoge
1. hoge
    1. hoge
    1. hoge
1. hoge
    1. hoge
    1. hoge
```

## 引用

> hogehogehoge
>> ネストされた引用です。<br> hogehogehoge

```markdown
> hogehogehoge
>> ネストされた引用です。<br> hogehogehoge
```

## 水平線

---
***

```markdown
---
***
```

## リンク

[ポートフォリオサイト](https://www.taka1156.site)

```markdown
[ポートフォリオサイト](https://www.taka1156.site)
```

## 画像

![vitepress](/article/logo-min.png)

```markdown
![vitepress](/site/logo-min.png)
```

## テーブル記法

| コンパイル言語 | スクリプト言語　| 
|:---:|:---:|
| C/C++| Ruby|
| Java| PHP|
| C# | Python|
| Kotlin | JavaScript|
| Swift | TypeScript|

## Emoji

:100:
:1st_place_medal:
:2nd_place_medal:
:3rd_place_medal:

```md
:100:
:1st_place_medal:
:2nd_place_medal:
:3rd_place_medal:
```

## highlight.js

-  javascript

```javascript
const greeting = (msg) => console.log(msg);
greeting('Hello World')
```

- vue

```html{2,7-16}
<template>
  <div id="app">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      msg: 'Hello World'
    };
  }
};
</script>

<style scoped>
p {
  color: red;
}
</style>
```

-  php

```php
function greeting(msg) {
  echo msg;
}
greeting('Hello World');
```

