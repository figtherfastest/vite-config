# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
   
```text
    eslint
   "eslint-config-standard": "^16.0.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.2.0",
    "eslint-plugin-standard": "^5.0.0",

```
```text

husky: 可以实现在git提交的时候检索代码

执行 npx husky install，会在本地出现一个husky 文件
执行 npx husky add .husky/pre-commit "npm run lint",会在.husky文件中新生成一个pre-commit 文件
```
