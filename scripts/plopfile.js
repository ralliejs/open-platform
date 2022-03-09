module.exports = (plop) => {
  plop.setGenerator('store', {
    description: '创建一个全局store',
    prompts: [{
      type: 'input',
      name: 'name',
      message: '请输入store名称'
    }],
    actions: [{
      type: 'add',
      path: '../src/stores/{{ dashCase name }}.ts',
      templateFile: '../template/store.hbs'
    }]
  })
}
