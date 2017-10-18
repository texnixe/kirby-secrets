# Plugin

## Force load plugins

The `$plugin_name` is the plugin folder name:

```php
kirby()->plugin($plugin_name);
```

It will only run once, not again by the core.

## Get loaded plugins

```php
print_r( kirby()->plugins );
```

## Load plugin last

Sometimes you might need to load your plugin last. It's not possible out of the box but when doing it like this it loads every plugin except your plugin first. It means your plugin will load last. Because a plugin will only be loaded once you don't need to worry about that the plugins will load mulitple times, they will only be loaded once.

**Source:** https://forum.getkirby.com/t/load-your-plugin-last/5718

```php
function loadOtherPluginsFirst() {
  $folders = glob( kirby()->roots()->plugins() . DS . '*', GLOB_ONLYDIR );

  if( ! empty( $folders ) ) {
    foreach( $folders as $folder ) {
      $name = pathinfo($folder, PATHINFO_FILENAME);

      if( $name != 'my-plugin') {
          kirby()->plugin( $name );
      }
    }
  }
}
```

## Plugin has loaded

```php
if( kirby()->plugin('modules') ) {
  echo 'The Modules plugin has been loaded';
}
```

**Be aware:** If the plugin exist, but has not been loaded it will force load it and return `true` if exists.

## Plugin creation

- [Boiler readme - Preview](Plugin-readme)
- [Boiler readme - Download](Plugin-readme.md)
- [Plugin best practices](Plugin-best-practices)
