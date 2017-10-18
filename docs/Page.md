# Multilevel find

Maybe we need to find something on an unknown level. In the case below we search by the slug:

```php
$match = page('projects')->index()->findBy('slug', 'project-a');
if($match) {
  echo 'My category found';
}
```

**Source**

https://forum.getkirby.com/t/multilevel-find/5577/3

## Get root parent

**Structure**

Let's say we want to get `projects` if we are at `projects`, `project-b` and `some-subpage`. That's what we call a root page in this example.

```text
home
  projects
    project-a
    project-b
      some-subpage
```

**Function**

```php
function rootParent($page) {
  if($page->depth() == 1 && ! $page->isHomePage()) {
    return $page;
  }
  return $page->parents()->last();
}
```

**Snippet**

If root page is set, print the title.

```php
$root_parent = rootParent($page);
if($root_parent) {
  echo $root_parent->title();
}
```

**Source**

https://forum.getkirby.com/t/get-root-page-of-child/3295/5

## Has parents

You can't write `if($page->parents())` to see if the page contains. It needs to be done like below.


```php
if($page->parents()->count() > 0) {
  echo 'Has parents';
}
```

or

```php
if($page->parents()->toArray()) {
  echo 'Has parents';
}
```

**Source**

https://forum.getkirby.com/t/if-has-parents/4874/3

## Advanced

- [Value manipulation](Page-value-manipulation)