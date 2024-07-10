# Rallie Open Platform

## Introduction
This is a project to verify the feasibility of building a microkernel architecture-based front-end application with rallieJS.

Benefits of microkernel architecture:
- Decouples monolithic applications
- Supports external plugin extensions

## Technology Stack

- Component Library: Antd
- Application Skeleton: Antd Pro
- Plugin Governance: rallie

## Plugin Integration
> For the host application's Block declaration, refer to `src/typings/index.ts#CoreType`

> Sample plugin reference: [ralliejs/demo-plugin](https://github.com/ralliejs/demo-plugin)

### Injecting Runtime
Configure the runtime where the core is injected as external.
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
Webpack can be configured as needed.
### Creating Plugin Block

```ts
import { createBlock } from '@rallie/block'

const myPlugin = createBlock('{github username}/{github repository name}')
  .relyOn(['core'])
  .onActivate(() => {
    const core = myPlugin.connect('core')
    // Register extension logic here
  })

myPlugin.run(async (env) => {
  if (env.isEntry) { // Plugins can also see the full view of the application during local development
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

### Registering Extension Logic
- Adding Multilingual Support
```ts
const core = myPlugin.connect('core')
core.methods.addI18nResources({
  'zh-CN': () => import('path/to/your/zh-CN/resource'),
  'en-US': () => import('path/to/your/en-US/resource')
})
```

- Using Multilingual
```ts
const core = myPlugin.connect('core')
// useTranslation is from react-i18next's useTranslation, no need to care about the namespace, the open platform will register a unique namespace for the plugin's multilingual resources.
const { useTranslation } = core.methods
```

- Replacing the Home Page
```ts
const core = myPlugin.connect('core')
core.methods.replaceSlot('home', () => import('path/to/your/component'))
```

- Adding Routes
```ts
const core = myPlugin.connect('core')
core.methods.addApplication({
  path: 'my-route', // It is recommended to use relative paths, if using an absolute path, you must add the prefix `/app/${plugin block name}`
  name: 'My Page'
  locale: 'parent.locale.key'
  loader: () => import('path/to/your/component'),
  icon?: () => import('path/to/your/icon/component')
  children: [
    {
      path: 'child-route',
      name: 'Subpage',
      locale: 'child.locale.key'
      loader: () => import('path/to/your/child/component'),
    }
  ]
})
// Other configuration items refer to react-router-dom and @ant-design/pro-layout
```

- Registering Plugin Information
```ts
const core = myPlugin.connect('core')
core.methods.registerPluginInfo({
  title: 'locale.title.key',
  description: 'locale.description.key',
})
```

### Deployment
Deploy the application to Github Pages, and then go to https://ralliejs.github.io/open-platform to install the plugin.

Reference action
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
