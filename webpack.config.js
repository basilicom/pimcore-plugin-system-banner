/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

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

    .addEntry("./public/js/system-banner", "./assets/classic-ui/system-banner.standalone.ts")
    .addEntry("./public/js/pimcore/system-banner", "./assets/classic-ui/system-banner.pimcore.ts")
    .addStyleEntry("./public/css/pimcore/system-banner", "./assets/classic-ui/scss/system-banner.scss")
;

module.exports = Encore.getWebpackConfig();
