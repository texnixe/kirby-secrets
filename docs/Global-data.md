Sometimes you have data that should live in a global scope. You can use `$GLOBALS`, `define`, a singleton pattern, or with the [Kirby registry](https://getkirby.com/docs/developer-guide/plugins/registry). Let's have a look at how it's done.

## Set the global data

The third argument can be string, array or an object which means you are not limited by it.

```php
$data = array(
  'key1' => 'data1',
  'key2' => array(
    'key' => 'value'
  )
);
kirby()->set('option', 'my_data', $data);
```

## Get the global data

`get` looks like `set` without the last argument.

```php
$data = kirby()->get('option', 'my_data');
print_r($data);
```

The nice thing about it is that you don't need to think of what scope you are in. The first time I used it was to get a set value inside a kirbytext tag.