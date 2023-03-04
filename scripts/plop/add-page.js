// @deprecated
module.exports = (plop) => {
  plop.setGenerator('page', {
    description: '添加一个页面',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: '请输入页面的路由',
        validate: (value) => {
          if (!value.trim()) {
            return '页面路由不能为空'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入页面组件名',
        validate: (value) => {
          if (!value.trim()) {
            return '页面组件名不能为空'
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
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: '../../src/pages/{{ path }}/index.tsx',
          templateFile: '../../template/page.hbs',
        },
        {
          type: 'add',
          path: '../../src/pages/{{ path }}/meta.tsx',
          templateFile: '../../template/meta.hbs',
        },
      ]
      return actions
    },
  })
}
