import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginGenerateEntrypoints } from '@pimcore/studio-ui-bundle/rsbuild/plugins';
import { createDynamicRemote } from '@pimcore/studio-ui-bundle/rsbuild/utils';
import path from 'path';
import fs from 'fs';
import { v4 } from 'uuid';
import packages from './package.json';


const buildId = v4();
const publicPath = path.resolve(__dirname, 'public');
const buildPath = path.resolve(__dirname, 'public', 'studio', 'build', buildId);

if (fs.existsSync( path.resolve(__dirname, 'public', 'studio', 'build'))) {
    fs.readdirSync(path.resolve(__dirname, 'public', 'studio', 'build')).forEach((file) => {
        if (file !== 'studio-npm-package.tgz') {
            fs.rmSync(path.resolve(__dirname, 'public', 'studio', 'build', file), { recursive: true });
        }
    })
}

if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath, { recursive: true });
}


export default defineConfig({
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
    server: {
        publicDir: false
    },
    source: {
        entry: {
            'main': './assets/studio-ui/js/src/main.ts',
        },
        decorators: {
            version: 'legacy'
        }
    },
    output: {
        manifest: true,
        assetPrefix: '/bundles/pimcorepluginsystembanner/studio/build/' + buildId,
        distPath: {
            root: buildPath
        },
        cleanDistPath: false
    },
    // output: {
    //     // Der Root ist nun /public/
    //     distPath: {
    //         root: publicPath,
    //         // Hier definierst du, wo welche Dateitypen landen:
    //         js: 'js',
    //         css: 'css',
    //     },
    //     // Die Studio-Spezialpfade überschreiben wir via Filename-Mapping oder manuell
    //     filename: {
    //         js: (pathData) => {
    //             // Sicherer Check: Falls kein Name da ist oder es nicht "studio" ist -> ab in /js/
    //             const name = pathData.chunk?.name || '';
    //             if (name.includes('studio') || name.includes('federation')) {
    //                 return `studio/build/${buildId}/[name].js`;
    //             }
    //             return 'js/[name].js';
    //         },
    //         css: (pathData) => {
    //             const name = pathData.chunk?.name || '';
    //             if (name.includes('studio')) {
    //                 return `studio/build/${buildId}/[name].css`;
    //             }
    //             return 'css/[name].css';
    //         }
    //     },
    //     assetPrefix: '/', // Oder dein Symfony Bundle Pfad
    //     cleanDistPath: false, // Wichtig, damit wir nicht den ganzen public-Ordner löschen!
    // },
    plugins: [
        pluginReact(),
        pluginSass(),
        pluginGenerateEntrypoints(),
        pluginModuleFederation({
            name: 'pimcore_plugin_system_banner_bundle',
            filename: `static/js/remoteEntry.js`,
            exposes: {
                '.': './assets/studio-ui/js/src/plugins.ts',
            },
            remotes: {
                '@pimcore/studio-ui-bundle': createDynamicRemote('pimcore_studio_ui_bundle'),
            },
            shared: {
                ...packages.dependencies,
                react: { singleton: true, eager: true, requiredVersion: false },
                'react-dom': { singleton: true, eager: true, requiredVersion: false }
            },
        })
    ],
    tools: {
        bundlerChain: (chain) => {
            chain.output.uniqueName('pimcore_plugin_system_banner_bundle');
        }
    }
});
