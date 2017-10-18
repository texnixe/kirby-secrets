# Site methods

Site methods can be seen as global methods, attached to the `$site` object.

**Place this code in a plugin:**

```php
site::$methods['test'] = function($site, $arg1 = '', $arg2 = '') {
  return $site->homePage() . ' ' . $arg1 . ' ' . $arg2;
};
```

**Add this into a template or a snippet:**

```php
<?php echo $site->test('testing', 12345); ?>
```

**Source**

https://forum.getkirby.com/t/get-path-to-assets-images/1304/8
