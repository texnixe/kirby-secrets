# Assets

## Convert any image to object

When an image is attached to a page, you can use [Thumb](https://getkirby.com/docs/cheatsheet/helpers/thumb) to resize that image.

It's now also possible to resize an image that is outside the content folder. To do that, you first convert the image to an object. You will now have access to the methods of [media](https://getkirby.com/docs/toolkit/api#media).

```php
$image = new Asset('assets/images/hero-default.jpg');
echo $image->resize(50)->url();
```

- [How to use the new asset class to generate thumbnails](https://forum.getkirby.com/t/how-to-use-the-new-asset-class-to-generate-thumbnails/4245/5)