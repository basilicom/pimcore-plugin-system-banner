// @see https://github.com/symfony/webpack-encore/blob/master/index.js for full API
const Encore = require("@symfony/webpack-encore");

Encore
    .configureRuntimeEnvironment(process.env.NODE_ENV === "production" ? "production" : "dev")
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

    .addEntry("./src/Resources/public/js/systemBanner", "./assets/systemBanner.standalone.js")
    .addEntry("./src/Resources/public/js/pimcore/systemBanner", "./assets/systemBanner.pimcore.js")
    .addStyleEntry("./src/Resources/public/css/pimcore/systemBanner", "./assets/scss/systemBanner.scss")
;

module.exports = Encore.getWebpackConfig();
