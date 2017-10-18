A custom folder setup can be a perfect way to customize the urls for a plugin. Let's have a look at how it's done.

**site.php** in root of your installation:

```php
$kirby = kirby();
$kirby->roots->foldername = $kirby->roots()->index() . DS . 'foldername';
```

Get it in a snippet or template like this:

```php
echo kirby()->roots()->foldername();
```

## Sources

- [Developer guide - Folders](https://getkirby.com/docs/developer-guide/configuration/folders)