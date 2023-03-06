# Rallie Open Platform

## 介绍
这是一个用来验证基于rallieJS搭建微内核架构的前端应用的可行性的项目

微内核架构的好处：
- 解耦巨石应用
- 支持外部插件扩展

## 技术栈

- 组件库：Antd
- 应用骨架：Antd Pro
- 插件治理：rallie

## 插件接入
>宿主应用的Block声明参考`src/typings/index.ts#CoreType`

>样例插件参考：[ralliejs/demo-plugin](https://github.com/ralliejs/demo-plugin)

### 注入runtime
将core注入的runtime配置为external
```ts
import { defineConfig } from 'vite'
import { viteExternalsPlugin } from "vite-plugin-externals";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    viteExternalsPlugin(
      {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "ReactRouterDOM",
        antd: "Antd",
      },
      {
        filter: () => true,
      }
    ),
  ],
});
```
webpack可自行配置
### 创建插件block

```ts
import { createBlock } from '@rallie/block'

const myPlugin = createBlock('{github用户名}/{github仓库名}')
  .relyOn(['core'])
  .onActivate(() => {
    const core = myPlugin.connect('core')
    // 这里注册扩展逻辑
  })

myPlugin.run(async (env) => {
  if (env.isEntry) { // 插件在本地开发时也能看到整个应用全貌
    const { loadHtml } = await import("@rallie/load-html");
    env.use(
      loadHtml({
        entries: {
          core: "https://ralliejs.github.io/open-platform/#core",
        },
      })
    );
    myPlugin.activate(myPlugin.name);
  }
});
```

### 注册扩展逻辑
- 添加多语言
```ts
const core = myPlugin.connect('core')
core.methods.addI18nResources({
  'zh-CN': () => import('path/to/your/zh-CN/resource'),
  'en-US': () => import('path/to/your/en-US/resource')
})
```

- 使用多语言
```ts
const core = myPlugin.connect('core')
const { useTranslation } = core.methods // useTranslation是react-i18next的useTranslation
```

- 替换首页
```ts
const core = myPlugin.connect('core')
core.methods.replaceSlot('home', () => import('path/to/your/component'))
```

- 添加路由
```ts
const core = myPlugin.connect('core')
core.methods.addApplication({
  path: 'my-route', // 推荐使用相对路径，如果用绝对路径，必须加上前缀`/app/${插件block名}`
  name: '我的页面'
  locale: 'parent.locale.key'
  loader: () => import('path/to/your/component'),
  icon?: () => import('path/to/your/icon/component')
  children: [
    {
      path: 'child-route',
      name: '子页面',
      locale: 'child.locale.key'
      loader: () => import('path/to/your/child/component'),
    }
  ]
})
// 其他配置项参考react-router-dom和@ant-design/pro-layout
```

- 注册插件信息
```ts
const core = myPlugin.connect('core')
core.methods.registerPluginInfo({
  title: 'locale.title.key',
  description: 'locale.description.key',
})
```

### 部署
将应用部署到Github Page，然后到 https://ralliejs.github.io/open-platform 安装插件即可

参考action
```yaml
name: Deploy github page

on:
  push:
    branches:
      - master
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'pnpm'
      - name: Install Dependencies
        run: pnpm install
      - name: Build
        run: pnpm build
      - name: Deploy github page
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-page # The branch the action should deploy to.
          folder: dist # The folder the action should deploy.
```









