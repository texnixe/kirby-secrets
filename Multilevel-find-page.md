Maybe we need to find something on an unknown level. In the case below we search by the slug:

```php
$match = page('projects')->index()->findBy('slug', 'project-a');
if($match) {
  echo 'My category found';
}
```

**Source**

https://forum.getkirby.com/t/multilevel-find/5577/3