# Panel 2 - Messages

There are `notify` which is a green message and `alert` which is a red error message. 

## Hooks

If you are inside the Panel and want to trigger a message, you can do that inside a hook.

In both examples there is a redirect and in order for the message to work it needs to be there. In these cases it will redirect to the page it just created.

### Message

```php
kirby()->hook('panel.page.create', function($page) {
  panel()->notify("Your page was created!");
  panel()->redirect('pages/' . $page->id() . '/edit');
});
```

### Error message

```php
kirby()->hook('panel.page.create', function($page) {
  panel()->alert("Error! Just kidding!");
  panel()->redirect('pages/' . $page->id() . '/edit');
});
```

## Without hooks

If you don't want to put the message into a hook you can use it for example directly into a field.

```php
panel()->notify('Hello world!');
```

or

```php
panel()->error('Did not work!');
``` 

**Sources**

https://forum.getkirby.com/t/hooks-flash-message/6766/1
https://forum.getkirby.com/t/trigger-panel-notification-message-from-field/3851/1