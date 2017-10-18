# Fingerprint

This feature is to prevent users from being logged out. Add this code in your `config.php` but change the returned string to anything you want.

```php
s::$fingerprint = function() {
  return 'some fingerprint';
};
```

>In scenarios, where IP or user agent based session fingerprints won't work, you can avoid problems that way.

**Sources**

- https://forum.getkirby.com/t/panel-keeps-logging-me-out/2747/20
- https://forum.getkirby.com/t/panel-keep-login-out/6587/10
- https://forum.getkirby.com/t/how-can-i-use-fingerprint/6047/4
