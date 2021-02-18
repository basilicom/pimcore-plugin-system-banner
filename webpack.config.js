// @see https://github.com/symfony/webpack-encore/blob/master/index.js for full API
const Encore = require("@symfony/webpack-encore");

Encore
    .disableSingleRuntimeChunk() // enabling this will create a separate runtime.js
    .setOutputPath("./")
    .setPublicPath("/")
    .configureBabel((babelConfig) => {
        babelConfig.plugins.push("@babel/plugin-transform-arrow-functions");
    })

    .enableSassLoader()
    .enablePostCssLoader((options) => {
        options.plugins = [require("autoprefixer")()];
    })

    .enableSourceMaps(false)
    .enableVersioning(false)

    .enableTypeScriptLoader()

    .addEntry("./src/Resources/public/js/systemBanner", "./assets/systemBanner.standalone.ts")
    .addEntry("./src/Resources/public/js/pimcore/systemBanner", "./assets/systemBanner.pimcore.ts")
    .addStyleEntry("./src/Resources/public/css/pimcore/systemBanner", "./assets/scss/systemBanner.scss")
;

module.exports = Encore.getWebpackConfig();
