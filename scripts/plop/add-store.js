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
            return 'store名称不能为空'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'path',
        message: '请输入新增store在stores文件夹中的路径',
        default: '/',
        validate: (value) => {
          if (!value.trim()) {
            return '路径不能为空'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/stores/{{ path }}/{{ dashCase name }}.ts',
        templateFile: '../../template/store.hbs',
      },
    ],
  })
}
