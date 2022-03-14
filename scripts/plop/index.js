// plop:
const addStore = require('./add-store')
const addPage = require('./add-page')
const addComponent = require('./add-component')

module.exports = (plop) => {
  addPage(plop)
  addComponent(plop)
  addStore(plop)
}
