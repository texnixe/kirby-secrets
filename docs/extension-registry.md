# Extension registry

## Custom registry set

Maybe you need a custom registry for your plugin.

**Put this code into a file that is loaded by a plugin, or autoloaded:**

```php
<?php
namespace Kirby\Registry;

class Type extends Entry {
	protected static $entries = [];

	public function set($name, $path) {
		static::$entries[$name] = $path;
	}
	public function get($name = null) {
		return static::$entries[$name];
	}
}
```

Change `Type` to the name of your registry type name, but make sure the first letter is uppercase. Also you are allowed to change `$entries` to a name of your choice.

**To set and get the registry do this:**

```php
$kirby->set('type', 'name', __DIR__ . '/types/name.php');
echo $kirby->get('type', 'name');
```

Change `type` to the name of your registry type name, but make sure everything is lowercase. Also change `name` to the name of your registry entry.

- [Forum - How can I create an own registry of files or folders](https://forum.getkirby.com/t/how-can-i-create-an-own-registry-set-of-files-or-folder/6415)

## Sources

- [Forum - How can I create an own registry of files or folders](https://forum.getkirby.com/t/how-can-i-create-an-own-registry-set-of-files-or-folder/6415)
- [Developer guide - Extension registry](https://getkirby.com/docs/developer-guide/plugins/registry)
