module.exports = {
    root: true,
    extends: 'standard',
    plugins: [
        'html'
    ],
    env: {
        browser: true,
        node: true
    },
    rules: {
        //缩进
        indent: ['error', 4],
        //newline
        'eol-last': ['error', 'never']
    }
}