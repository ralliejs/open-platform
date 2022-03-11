// plop:
const addStore = require('./add-store')
const addPage = require('./add-page')

module.exports = (plop) => {
  addStore(plop)
  addPage(plop)
}
