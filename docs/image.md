# Image

## Image manipulation

Kirby is based on [SimpleImage](https://github.com/claviska/SimpleImage). It means that you can use SimpleImage functions directly to make more advanced image manipulations than Kirby uses.

### Crop position top

As of today you can't specify a crop position with the Kirby thumb function [#99](https://github.com/getkirby/toolkit/issues/99), but it's possible to build your own.

```php
$simpleimageObject = new abeautifulsite\SimpleImage($image_path);
$simpleimageObject->thumbnail(150, 300, 'top')->save($thumb_path);
```

If you don't want to build it yourself there is a plugin for it called [Kirby Crop Top](https://github.com/jenstornell/kirby-crop-top).

There are many more things you can to. [Read more on SimpleImage docs](https://github.com/claviska/SimpleImage).

## Image content url

If you are in the Panel and click on an image you will see a url like this:

```text
https://example.com/content/1-projects/1-project-a/folding-rule.jpg
```

If you change the sort order of the pages you can't access the image by this url anymore.

However there is a secret redirected url that you can use. Remove `content` and the sorting number prefix on all the pages in the hierarchy, in the url.

```text
https://example.com/projects/project-a/folding-rule.jpg
```

This url will not work as `200` but as a `302`, temporary redirect.

**Note**

I'm personally not too fond of "magic" redirects that I did not ask for, but in this case I understand why it can be useful.

## Sources

- [SimpleImage](https://github.com/claviska/SimpleImage)
- [Issue #99](https://github.com/getkirby/toolkit/issues/99)
- [Kirby Crop Top](https://github.com/jenstornell/kirby-crop-top)
- [Kirby Courses - 10 Tips & Hidden Features](https://www.youtube.com/watch?v=YjbbcKWOLs8)
