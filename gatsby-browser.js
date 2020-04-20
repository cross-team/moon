var React = require('react')
var { MainContentController } = require('./src/providers/main-content-context')

exports.wrapRootElement = ({ element }) => {
  return <MainContentController>{element}</MainContentController>
}
