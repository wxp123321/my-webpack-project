//不是在打包时执行
module.exports = function (css) {
    console.log(css)

    if (window.innerWidth >= 768) {
        return css.replace('red', 'green')
    } else {
        return css.replace('red', 'blue')
    }
}