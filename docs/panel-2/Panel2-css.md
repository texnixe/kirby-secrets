## Multiple panel css

Instead of using `c::set` it's also possible to use the registry to add the option. It's also possible to use multiple css files. To do that just add them as array instead of a string.

Adding multiple css files can be good when having a custom css file and also a css file from a plugin.

```php
kirby()->set('option', 'panel.stylesheet', array(
  'assets/plugins/my-plugin/css/panel.css',
  'assets/css/panel.css'
));
```

## Style panel login form

To style the panel login form you can do this:

**config.php**

```php
c::set('panel.stylesheet', 'assets/css/panel.css');
```

**panel.css**

It will add a logo image and a "Powered by The company" to your form.

```css
body.login .form:before {
  content: '';
  height: 150px;
  width: 100%;
  margin-bottom: 1.5em;
  display: block;
  background: #fff url('../images/logo.svg') center no-repeat;
  background-size: contain;
}
body.login .form::after {
  color: #999;
  content: 'Powered by The company';
}
body.login .form .btn-submit {
  margin: 0 0 1.5em 0;
}
body.login .form fieldset.buttons-centered {
  border-bottom: 1px solid #ccc;
}
```

- [Forum - Share your custom panel css](https://forum.getkirby.com/t/share-your-custom-panel-css/5298/8)

## Style panel search box

The panel search box can be hard to read. This is the way to style it white:

**config.php**

```php
c::set('panel.stylesheet', 'assets/css/panel.css');
```

**panel.css**

```css
.search-input {
  background-color: white;
}
.search:after {
  border-bottom-color: white
}
.search-section li.active a, .search-section li:hover a {
  color: white;
  background-color: rgba(255, 255, 255, .2);
}
```

- [Forum - Share your custom panel css](https://forum.getkirby.com/t/share-your-custom-panel-css/5298/5)
- [Issue #1014](https://github.com/getkirby/panel/issues/1014)

## Sources

- [Developer guide - Panel CSS](https://getkirby.com/docs/developer-guide/panel/css)
- [Forum - Share your custom panel css](https://forum.getkirby.com/t/share-your-custom-panel-css/5298/8)
- [Issue #1014](https://github.com/getkirby/panel/issues/1014)