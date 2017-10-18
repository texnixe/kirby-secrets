# Panel 2 - Url

## Get panel root uri

Not sure if it will work in all cases but it returns `panel` if not changed:

```php
echo str_replace(kirby()->urls()->index() . '/', '', panel()->urls()->index());
```

## Get panel root url

To get the panel root url from inside a field, do this:

```php
echo panel()->urls()->index();
```