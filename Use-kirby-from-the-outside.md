If you use this code, you will have access to all the Kirby function from outside of Kirby:

```php
define('DS', DIRECTORY_SEPARATOR);

// load kirby
require(DIR . DS . 'kirby' . DS . 'bootstrap.php');

$kirby = kirby();
$site = $kirby->site();
```

**Source**

https://forum.getkirby.com/t/traversing-content-outside-of-templates/968/3