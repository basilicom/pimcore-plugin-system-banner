// @see https://github.com/symfony/webpack-encore/blob/master/index.js for full API
import Encore from '@symfony/webpack-encore';
import path from 'path';

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
            config: path.resolve(import.meta.dirname, '', 'postcss.config.js'),
        };
    })

    .enableSourceMaps(false)
    .enableVersioning(false)

    .enableTypeScriptLoader()

    .addEntry("./public/js/system-banner", "./assets/classic-ui/system-banner.standalone.ts")
    .addEntry("./public/js/pimcore/system-banner", "./assets/classic-ui/system-banner.pimcore.ts")
    .addStyleEntry("./public/css/pimcore/system-banner", "./assets/classic-ui/scss/system-banner.scss")
;

export default Encore.getWebpackConfig();
