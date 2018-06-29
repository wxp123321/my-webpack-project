import base from './css/base.less'
import common from './css/common.less'

import {a} from './common/util'
import {chunk} from 'lodash'

console.log(a())

var app = document.getElementById('app')
var div = document.createElement('div')

div.className = 'box'
app.appendChild(div)


// base.use()
// // // base.unuse()
// // //
// // // var flag = false
// // //
// // // setInterval(function () {
// // //     if (flag) {
// // //         base.unuse()
// // //     } else {
// // //         base.use()
// // //     }
// // //     flag = !flag
// // // }, 500)