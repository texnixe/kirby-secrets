# Thumb

## toFile

### Old way

How do you create a thumbnail with Kirby?

**The most common is probably by using the `thumb` function like this:**

```php
<?= thumb($page->image($page->my_image()), array('width' => 300)); ?>
```

https://getkirby.com/docs/cheatsheet/helpers/thumb

We need to wrap everything with a `thumb` function. To use a particular filename, we also need to wrap `$page->my_image()` inside `$page->image()`, else it will pick the first image. It's not very straight forward.

### New way

To use `toFile` is a "new" way of working with thumbs. It's in the [docs](https://getkirby.com/docs/cheatsheet/field-methods/toFile) but not very prominent.

**It looks much simpler:**

```php
<?= $page->my_image()->toFile()->resize(300); ?>
```

**To check if the file exists we can do this:**

```php
<?= ($image = $page->my_image()->toFile()) ? $image->resize(300) : ''; ?>
```

In the above, we check if `$page->my_image()->toFile()` exists and if it does, put it into `$image`. Then `$image` is used to resize the thumb. If it does not match, don't write anything. It may look complicated, but this way we can get away with a oneliner.

https://forum.getkirby.com/t/site-thumb-not-created/9267/2