## Special characters

To allow special characters like quotes, always wrap the whole block with quotes and then escape the quotes inside it with `\`.

```text
fields:
  my_field:
    title: "A field title with \"Quotes\""
    type: text
```

- [Forum - Special characters breaking blueprint content in the panel](https://forum.getkirby.com/t/special-characters-breaking-blueprint-content-in-the-panel/3748/3)

## Field definition subfolders

You can create global field definitions in subfolders. It's especially good if you have many global field definitions and it's starting to be messy.

```text
fields:
  myfield: subfolder/definition
```

- [Kirby Courses - 10 Tips & Hidden Features](https://www.youtube.com/watch?v=YjbbcKWOLs8)

## Get all blueprints

Especially for plugins it can sometimes be useful to be able to get all the blueprints. Let's see how that is done.

```php
$blueprints = kirby()->get('blueprint');
print_r($blueprints);
```

- [Get the blueprint in a panel field from another page](https://forum.getkirby.com/t/get-the-blueprint-in-the-a-panel-field-from-another-page/4877/5)

## Sources

- [Forum - Special characters breaking blueprint content in the panel](https://forum.getkirby.com/t/special-characters-breaking-blueprint-content-in-the-panel/3748/3)
- [Kirby Courses - 10 Tips & Hidden Features](https://www.youtube.com/watch?v=YjbbcKWOLs8)
- [Get the blueprint in a panel field from another page](https://forum.getkirby.com/t/get-the-blueprint-in-the-a-panel-field-from-another-page/4877/5)