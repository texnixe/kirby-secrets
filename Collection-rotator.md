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

## Sources

- [Forum - Filter interval of pages](https://forum.getkirby.com/t/filter-interval-of-pages/5893)