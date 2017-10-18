# Cache

## Partial cache

### Enable the cache

In this case we want to enable the cache. The `cache.ignore` make sure no pages are cached.

```php
c::set('cache', true);
c::set('cache.ignore', ['*']);
```

### `getCache`

If the cache is already set, load data from the cache. If the cache is not set, return the data from the `setCache` function.

```php
function getCache($key) {
  $cache = cache::get($key);
  if(!$cache) {
    $cache = setCache();
    cache::set($key, $cache);
  }
  return $cache;
}
```

### `setCache`

What is inside the `setCache` function is probably slow. That's why we need a cache for it.

```php
function setCache() {
  return 'My data';
}
```

### Function call

The key is `my_cache`. If you change it a new cache file will be saved.

```php
echo getCache('my_cache');
```

- [Forum - Cache part of a page](https://forum.getkirby.com/t/cache-part-of-a-page/5199/1)

## Sources

- [Developer guide - Caching](https://getkirby.com/docs/developer-guide/advanced/caching)
- [Cheatcheet - Cache](https://getkirby.com/docs/cheatsheet/options/cache)
- [Cheatcheet - Cache ignore](https://getkirby.com/docs/cheatsheet/options/cache-ignore)
