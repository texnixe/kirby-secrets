If you make plugins for the Panel you can use routes, but you can also use Panel routes, routes specially for the Panel.

**Visit the url below**

Change domain to your domain and you need to prefix the route with `panel/`.

```text
https://example.com/panel/my-panel-route/something`
```

**In your plugin**

```php
panel()->routes(array(
  array(
    'pattern' => 'my-panel-route/(:any)',
    'action' => function($uid) {
      echo 'Hello from the panel! ' . $uid;
    }
  )
));
```

It's often good to add some extra "protection". Below we check that the Panel exist and that a user is logged in.

```php
if(class_exists('Panel') && site()->user()) {
  panel()->routes(array(
    array(
      'pattern' => 'my-panel-route/(:any)',
      'action' => function($uid) {
        echo 'Hello from the panel! ' . $uid;
      }
    )
  ));
}
```

**Source**

https://github.com/pedroborges/kirby-autogit/blob/master/lib/routes.php