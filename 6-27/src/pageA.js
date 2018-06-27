require.include('./moduleA')

var page = 'subpageA'

if(page === 'subpageA') {
    require.ensure([], function () {
        var subpageA = require('./subPageA')
    }, 'subPageA')
}else if (page === 'subpageB') {
    require.ensure([], function () {
        var subpageB = require('./subPageB')
    }, 'subPageB')
}

require.ensure([], function () {
    var _ = require('lodash')
    _.join(['1',  '2'], '3')
}, 'vendor')

export default 'pageA'