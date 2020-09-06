module.exports = {
    devServer: {
        open: true,
        port: 8000
        // proxy: {}
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
};
