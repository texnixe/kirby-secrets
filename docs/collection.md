## Is collection

In the example below we check if the object is a collection.

```php
if(is_a($collection, 'Collection')) {
  echo 'This is a collection';
}
```

- [Forum - Check if the object is a page or collection](https://forum.getkirby.com/t/check-if-the-object-is-a-page-or-collection/6464)

## Global collection filter

There is nothing called "Global collection filter", but it's possible to get close to creating one.

```php
page::$methods['realChildren'] = function($page) {
  return $page->children()->filterBy('intendedTemplate', 'not in', ['modules', 'revision']);
};
```

### Template / snippet

```php
foreach($page->realChildren() as $child) {
  echo $child->title();
}
```

- It will not work on collections.
- You can't name it `children` because then it will still use the native `children` method.

[Forum - Global filters run it before template loads](https://forum.getkirby.com/t/global-filters-run-it-before-template-loads/6976/4)

## Advanced

- [Collection rotator](Collection-rotator)

## Sources

- [Forum - Check if the object is a page or collection](https://forum.getkirby.com/t/check-if-the-object-is-a-page-or-collection/6464)
- [Forum - Global filters run it before template loads](https://forum.getkirby.com/t/global-filters-run-it-before-template-loads/6976/4)
- [Developer guide - Custom collection filters](https://getkirby.com/docs/developer-guide/objects/collections)
- [Cookbook - Filtering](https://getkirby.com/docs/cookbook/filtering)
