<?php

namespace Basilicom\PimcorePluginSystemBanner\DependencyInjection;

use Pimcore\Bundle\StudioUiBundle\Webpack\WebpackEntryPointProviderInterface;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class PimcorePluginSystemBannerExtension extends Extension
{
    /**
     * @inheritdoc
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../../config'));
        $loader->load('services.yaml');

        // pimcore/studio-ui-bundle is optional and unavailable on Pimcore 11
        if (interface_exists(WebpackEntryPointProviderInterface::class)) {
            $loader->load('services_studio.yaml');
        }
    }
}
