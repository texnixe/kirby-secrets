# Hooks

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

### Reset triggered hooks

When triggering a hook, it will only fire ones. If you trigger it again, it will not run. That's the behavior to prevent infinity loops. In some cases there is a need to trigger a hook more than ones. It's possible to reset the trigger array, like below.

```php
kirby()::$triggered = array();
```

- [Forum - Trigger hook does not fire oldpage](https://forum.getkirby.com/t/trigger-hook-does-not-fire-oldpage/8700/7)

## Sources

- [Developer guide - Extension registry](https://getkirby.com/docs/developer-guide/plugins/registry)
