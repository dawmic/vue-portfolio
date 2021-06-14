module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_mixins.scss";
            @import "@/scss/_animations.scss";
          `
            }
        }


    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-portfolio/' : '/'




};