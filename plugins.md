# Plugins

*Unofficial secrets for Kirby CMS*

## Loaded plugins

### Get loaded plugins as array

```php
print_r( kirby()->plugins );
```

### Check if a plugin has been loaded

There are a few ways to do this:

**1. As a condition**

```php
if( a::get( kirby()->plugins, 'modules' ) ) {
  echo 'The Modules plugin has been loaded';
}
```

**2. As a function call**

```php
function pluginLoaded($plugin_name) {
  if( a::get( kirby()->plugins, 'modules' ) ) {
    return true;
  }
}

if( pluginLoaded('modules') ) {
  echo 'The Modules plugin has been loaded';
}
```

**3. Alternative solution**

```php
if( kirby()->plugin('modules') ) {
  echo 'The Modules plugin has been loaded';
}
```

**Be aware:** If the plugin exist, but has not been loaded it will force load it and return `true` if exists.

## Force load plugins

The `$plugin_name` is the plugin folder name:

```php
kirby()->plugin($plugin_name);
```

It will only run once, not again by the core.