# hooks

## Custom hooks

Maybe a hook is missing or you need a custom one for your plugin. Let's have a look at how it's done.

**Add** a hook where you want the action to happend:

```php
kirby()->hook('my_hook', function($arg1, $arg2) {
  echo $arg1;
  print_r($arg2);
});
```

**Trigger** the hook when you want the action to happend:

```php
kirby()->trigger('my_hook',
  [
    'Argument 1',
    ['item' => 'Argument2']
  ]
);
```

## Sources

- [Developer guide - Extension registry](https://getkirby.com/docs/developer-guide/plugins/registry)
