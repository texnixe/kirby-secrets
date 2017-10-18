### Load your plugin last

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