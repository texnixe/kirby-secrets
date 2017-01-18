# Routes

*Unofficial secrets for Kirby CMS*

## Match all

```php
kirby()->routes(array(
  array(
    'pattern' => '(.+)',
    'action' => function($uri) {
      echo $uri;
    }
  )
));
```

When [a bug](https://github.com/getkirby/kirby/issues/368) is solved you could probably use `(:all)` instead:

**Related:** https://forum.getkirby.com/t/routes-prevent-nesting-from-hell/3304

## Undocumented syntax

For plugins I always use this syntax. It's quite common but yet it's not a part of the Kirby docs.

```php
kirby()->routes(array(
  array(
    'pattern' => 'my/awesome/(:any)',
    'action'  => function($uid) {
      echo $uid;
    }
  )
));
```

If you prefer using [`c::set()`](https://getkirby.com/docs/developer-guide/advanced/routing) or [`$kirby->set()`](https://getkirby.com/docs/developer-guide/plugins/registry), you can use these as well.