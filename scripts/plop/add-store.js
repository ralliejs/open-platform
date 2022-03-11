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
      {
        type: 'input',
        name: 'path',
        message: '请输入新增store在stores文件夹中的路径(默认为stores根路径)',
        default: '/',
        validate: (value) => {
          if (!value.startsWith('/')) {
            return '路径名必须以‘/’开头'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/stores{{ path }}/{{ dashCase name }}.ts',
        templateFile: '../../template/store.hbs',
      },
    ],
  })
}
