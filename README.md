# Pimcore Plugin System Banner

This plugin will show a banner on the top right with the PIMCORE_ENVIRONMENT name.

* development environments = green
* test environments = purple
* stage environments = yellow
* prod environments = red

![Environment dev](docs/environment-dev.jpg)


## Installation

```
composer require basilicom/pimcore-plugin-system-banner
```


### Activate Plugin

* Add to AppKernel.php

or

* Activate in the Pimcore backend

### build assets
e.g. for Pimcore <= X respectively Symfony < 5

```bin/console assets:install web --symlink --relative```

e.g. for Pimcore X respectively Symfony > 5

```bin/console assets:install public --symlink --relative```


## Add the banner to the frontend (only when backend user is active)

use the following twig function
``` 
{{ renderSystemBanner() | raw }}
```
