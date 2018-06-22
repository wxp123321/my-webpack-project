import sum from './sum'

//common js
var minus = require('./minus')

//amd
require(['./muti'],function (muti) {
    console.log(muti(2,3))
})

console.log(sum(1,2))
console.log(minus(5,2))