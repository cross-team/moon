var React = require('react')
var { HeaderController } = require('./src/providers/header-context')

exports.wrapRootElement = ({ element }) => {
  return <HeaderController>{element}</HeaderController>
}
