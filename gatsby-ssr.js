var React = require('react')
var { RefsController } = require('./src/providers/refs-context')

exports.wrapRootElement = ({ element }) => {
  return <RefsController>{element}</RefsController>
}
