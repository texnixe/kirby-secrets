## str::replace() alternative

It's nice to be able to search replace with key/value pair. The toolkit does NOT provide such a function, but PHP does.

**Solution:**

```php
$string = strtr($string,
  array(
    'Search for this' => 'Replace with this',
    'Search something else' => 'Replace with something else'
    )
);
```