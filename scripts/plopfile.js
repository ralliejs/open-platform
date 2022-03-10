// plop:

module.exports = (plop) => {
  plop.setGenerator('store', {
    description: '添加一个全局store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入store名称',
        validate: (value) => {
          if (!value) {
            return 'store名称必填'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/stores/{{ dashCase name }}.ts',
        templateFile: '../template/store.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: '添加一个页面',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: '请输入页面的路由',
        validate: (value) => {
          if (!value) {
            return '页面路由必填'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入页面组件名',
        validate: (value) => {
          if (!value) {
            return '页面组件名必填'
          }
          return true
        },
      },
      {
        type: 'confirm',
        name: 'isLayoutPage',
        message: '是否嵌套子页面？',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{ path }}/index.tsx',
        templateFile: '../template/page.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{ path }}/meta.tsx',
        templateFile: '../template/meta.hbs',
      },
    ],
  })
}
