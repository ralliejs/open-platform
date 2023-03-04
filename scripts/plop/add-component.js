// @deprecated
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: '添加一个组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名',
        validate: (value) => {
          if (!value.trim()) {
            return '组件名不能为空'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'path',
        message: '请输入新增组件在components文件夹中的路径',
        default: '/common',
        validate: (value) => {
          if (!value.trim()) {
            return '路径不能为空'
          } else if (value.trim() === '/') {
            return '如果你要添加的是全局公共组件，请添加到common文件夹中'
          }
          return true
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: '../../src/components/{{ path }}/{{ dashCase name }}.tsx',
          templateFile: '../../template/component.hbs',
        },
      ]
      return actions
    },
  })
}
