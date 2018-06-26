import sum from './sum'

//common js
var minus = require('./minus')

//amd
require(['./muti'],function (muti) {
    console.log(muti(2,3))
})

console.log(sum(1,2))
console.log(minus(5,2))
console.log(minus(5,2))


let func = () => {}
const NUM= 45
let arr = [1,2,4]
let arrB = arr.map(item => item*2)

console.log('new Set(arrB)', new Set(arrB))