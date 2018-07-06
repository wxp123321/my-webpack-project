import './css/common.less'

import {a} from './common/util'
a()

console.log(a())

var app = document.getElementById('app')
var div = document.createElement('div')

div.className = 'box'
app.appendChild(div)

$('div').addClass('new3')

$.get('/api/comments/show',{
    id: '4193586758833502',
    page: 1
},function (data) {
    console.log(data)
})

if(module.hot) {
    //实现热更新
    module.hot.accept()
}


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