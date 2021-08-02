module.exports = {
    transpileDependencies: ['common'],
    chainWebpack: config => {
        config.plugin('html')
            .tap((args) => {
                args[0].title = '杨恒的杂货小店'
                return args
            })
    },
    lintOnSave: false
}
