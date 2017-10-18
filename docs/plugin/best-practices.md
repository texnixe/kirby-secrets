# Plugin development - Best practices

These best practices are, like everything else in this repository, unofficial recommendations.

## Table of contents

- [Collisions](#collisions)
- [Security](#security)
- [Github](#github)

## Security

### Routes

When you create a route, **always** think about where it will be used.

**Panel**

Maybe it's only for the panel. Then make sure the panel exists first:

```php
if(class_exists('Panel') {
  // Route
}
```

**Logged in users**

Maybe it's for logged in users. Then make sure the user is logged in:

```php
if(site()->user()) {
  // Route
}
```

It's also possible to combine these two.

### Ajax

When using ajax on the page or in the panel you can sometimes see a `CSRF` value. To protect against false requests you can check that value against a PHP string.

One of these should probably match that `CSRF` value:

```php
echo csrf();
echo s::get('csrf');
```

**Read more:**

- https://forum.getkirby.com/t/csrf-in-a-working-post-route-do-i-need-to-worry/4284/3
- https://getkirby.com/docs/cheatsheet/helpers/csrf
- https://getkirby.com/docs/toolkit/api/helpers/csrf

## Collisions

### Components and models

Components and models have on thing in common. They both works as extended classes. It means that only one plugin can use that particular class. Therefor you need to be extra careful before using them.

If you really need to extend one of these classes, add an config option for it. Then the site admin can in some cases disable that extended feature and handle it differently, to make it work with all the other plugins. 

### Page methods and pages methods

If you are having a page method or a pages method, make sure to think of a name that can't collide with other plugins or with the fields. It's not as sensitive as components and models, but the collision risk is still present.

I would also recommend to by a config option, set a custom name and a disable config option. If it's disabled, the site admin can choose to have the page method or not.

https://forum.getkirby.com/t/page-field-key-in-collision-with-page-method-name/1359/3

**Protected page methods by the core:**

https://getkirby.com/docs/cheatsheet#page

**Protected pages methods by the core**

https://getkirby.com/docs/cheatsheet#pages

### Config options

If you are having config options, make sure to think of a name that can't collide with other plugins or with the core.

**One way is to prefix the options like this:**

```php
c::set('plugin.[plugin-name].[option-key]');
```

**Protected options by the core:**

https://getkirby.com/docs/cheatsheet#options

### Blueprint options

In most cases, try to use keys that might not be used for anything else. The key `template` is for example already used by the panel.

If you really need to use a protected name, in some cases this will work inside a field:

```php
echo $field->__call('template', null);
```

**Source**

https://github.com/jenstornell/kirby-secrets/wiki/Use-already-taken-panel-field-keys

### Plugin name

To make sure you have an unique plugin name, you can search the [Kirby Plugins repository](https://github.com/jenstornell/kirby-plugins/issues).

### Namespaces

To not have a collision with other classes or methods you need to prefix or use a namespace. I think namespaces is the way to go.

**Example**

```php
<?php
namespace JensTornell\Bricks;
use c;

class ProjectPage extends \Page {
  public function cover() {
    return $this->image(c::get('plugin.test.cover'));
  }
}

$kirby->set('page::model', 'project', 'JensTornell\Bricks\\ProjectPage');
```

**Source**

https://forum.getkirby.com/t/model-class-is-defined-or-can-be-autoloaded/6255/4

### Fields

**Naming**

To make sure you have an unique field name, you can search the field in the [Kirby Plugins repository](https://github.com/jenstornell/kirby-plugins/labels/Field).

**Make sure to get the field**

When using fields in plugins, to be extra careful, you can make sure you get the field value:

```php
echo $page->content()->get('url');
```

If you use `echo $page->url()` instead of the above, you will **not** get the field value. Instead you will get the built in page url.

## Github

### Readme

The frontpage of the plugin is controlled by the `readme.md` file.

To get started, there is a brilliant [Kirby boiler readme](Boiler-readme) file. It contains a starting point for almost everything you need in your readme file.

### License

**MIT**

If your plugin should be free, a great license for that is [MIT](https://opensource.org/licenses/MIT).

**Kirby license**

If your plugin should have a license fee, the [Kirby license](https://getkirby.com/license) is a good example. In short it says, [try it](https://getkirby.com/try) and when you are happy with it, buy it.

The greatest thing about it is that the code is totally open to read and to try. Very honest that way. There should not be much refunds with this license, because the user buys it when everything works well.

**LICENSE file**

In Github you can add a [LICENSE](https://help.github.com/articles/adding-a-license-to-a-repository/) file and Github will extract some useful information from it.

**Kirby CLI**

[Kirby CLI](https://github.com/getkirby/cli) is, among other things, a plugin installer.

For it to work with your plugin you need a `package.json` file. Only `type` is required.

An example:

```php
{
  "name": "kirby-reveal",
  "description": "Splitscreen preview of the site in the panel",
  "author": "Jens Törnell <jens.tornell@gmail.com>",
  "version": "0.5",
  "type": "kirby-plugin",
  "license": "MIT"
}
```