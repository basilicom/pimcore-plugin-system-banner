# Pimcore Plugin System Banner

## Why?
This plugin will show a banner on the top right with the PIMCORE_ENVIRONMENT name.

It will be red, if you are on production. Otherwise green.

## Add the banner to the frontend (only when backend user is active)

use the following twig function
``` 
{{ renderSystemBanner() | raw }}
```
