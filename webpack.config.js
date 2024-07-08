// @see https://github.com/symfony/webpack-encore/blob/master/index.js for full API
const Encore = require("@symfony/webpack-encore");
const path = require("path");

Encore
    .disableSingleRuntimeChunk() // enabling this will create a separate runtime.js
    .setOutputPath("./")
    .setPublicPath("/")
    .configureBabel((babelConfig) => {
        babelConfig.plugins.push("@babel/plugin-transform-arrow-functions");
    })

    .enableSassLoader()
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            // the directory where the postcss.config.js file is stored
            config: path.resolve(__dirname, '', 'postcss.config.js'),
        };
    })

    .enableSourceMaps(false)
    .enableVersioning(false)

    .enableTypeScriptLoader()

    .addEntry("./src/Resources/public/js/system-banner", "./assets/system-banner.standalone.ts")
    .addEntry("./src/Resources/public/js/pimcore/system-banner", "./assets/system-banner.pimcore.ts")
    .addStyleEntry("./src/Resources/public/css/pimcore/system-banner", "./assets/scss/system-banner.scss")
;

module.exports = Encore.getWebpackConfig();
