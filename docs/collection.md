# Collection

## Is collection

In the example below we check if the object is a collection.

```php
if(is_a($collection, 'Collection')) {
  echo 'This is a collection';
}
```

[Forum - Check if the object is a page or collection](https://forum.getkirby.com/t/check-if-the-object-is-a-page-or-collection/6464)

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

## Collection rotator

### Get next collection of pages

What we want here is an interval of pages and if it reaches the end of the collection, start over until the limit is reached.

**Look at this list of pages:**

```text
project-a
project-b
project-c
project-d //The current page
project-e
```

**Result should be a collection like this (limit set to 4):**

```text
project-e
// End of collection. Starts over to fill the limit.
project-a
project-b
project-c
```

**Page method**

```php
page::$methods['collectionRotator'] = function($page, $limit) {
  $pages = $page->siblings();
  $offset  = $pages->indexOf($page)+1;
  $items = $pages->slice($offset, $limit);
  $remainder = $pages->limit($limit-$items->count());

  $collection = new Pages();
  $collection->add($items);
  $collection->add($remainder);
  return $collection;
};
```

**Usage**

```
foreach($page->collectionRotator(4) as $child) {
  echo $child->title();
}
```

[Forum - Filter interval of pages](https://forum.getkirby.com/t/filter-interval-of-pages/5893)

## Sources

- [Developer guide - Custom collection filters](https://getkirby.com/docs/developer-guide/objects/collections)
- [Cookbook - Filtering](https://getkirby.com/docs/cookbook/filtering)
