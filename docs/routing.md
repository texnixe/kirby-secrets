# Routing

## kirby()->routes()

For plugins it's quite common to use the syntax below.

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

- [Developer guide - Routing](https://getkirby.com/docs/developer-guide/advanced/routing) `c::set`
- [Developer guide - Extension registry - Route](https://getkirby.com/docs/developer-guide/plugins/registry) `$kirby->set`
- [Toolkit - Routing](https://getkirby.com/docs/developer-guide/toolkit/routing) `$router->register`

## Return a response or site visit

Instead of use `echo` or `return false;` to output or return something from a route, you can create a response object.

### Response exemples

```php
return new Response('Hello World!', 'html', 200);
return new Response('You have an error!', 'html', 404);
return new Response(json_encode(['Hello' => 'World']), 'json', 200);
return new Response(snippet('error-message', [], true), 'html', 404);
```

- [Toolkit - Response object](https://getkirby.com/docs/toolkit/api#response)
- [Forum - How to break a route](https://forum.getkirby.com/t/how-do-you-prefer-to-break-a-route/6518/1)
- [Status codes](https://httpstatuses.com/)

### Visit examples

The syntax `site()->visit('error')` will not work if you change [`c::set('error')`](https://getkirby.com/docs/cheatsheet/options/error). The example below is better in that case.

```php
return site()->visit(site()->errorPage());
```

### Full example

```php
kirby()->routes(array(
  array(
    'pattern' => 'some/page',
    'action'  => function() {
      return new Response('You have an error!', 'html', 404);
    }
  )
));
```

## Regular expressions

### Pattern examples

```php
'pattern' => '(.+)',           // Match all
'pattern' => '(?!assets)(.*)', // Match all except the assets folder
```

#### Full example

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

- [Github - #368 - Route with the pattern just `(:all)` does not match](https://github.com/getkirby/kirby/issues/368)
- [Forum - Routes - Prevent nesting from hell](https://forum.getkirby.com/t/routes-prevent-nesting-from-hell/3304)
- [Forum - Not condition in routes](https://forum.getkirby.com/t/not-condition-in-regex-in-routes/6335)

### Built in patterns

```php
'(:num)'     => '(-?[0-9]+)',
'(:alpha)'   => '([a-zA-Z]+)',
'(:any)'     => '([a-zA-Z0-9\.\-_%=]+)',
'(:all)'     => '(.*)',
'/(:num?)'   => '(?:/([0-9]+)',
'/(:alpha?)' => '(?:/([a-zA-Z]+)',
'/(:any?)'   => '(?:/([a-zA-Z0-9\.\-_%=]+)',
'/(:all?)'   => '(?:/(.*)',
```

 - [Forum - Enable plugins to override panel routes](https://forum.getkirby.com/t/enable-plugins-to-override-panel-routes/8820/4)
