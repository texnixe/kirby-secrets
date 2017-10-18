# Panel 2 - Fields

## Use already taken field keys

Maybe you are creating a field that looks like this:

**Blueprint**

```text
fields:
  my_field:
    label: My field
    type: myfield
    template: A template name
```

**Inside the field**

This will probably **NOT** work well, because `template` is already used by the panel.

```php
echo $field->template();
```

This will however work:

```php
echo $field->__call('template', null);
```

**Source**

https://forum.getkirby.com/t/best-practice-for-blueprint-options-in-plugins/4278/7

## Field inheritance

When building a field based on another field it can sometimes be needed to get the previous generated output.

It's possible to "inherit" the content by using `parent::content()` in this case.

```php
class myfieldField extends TextareaField {
  public function content() {
    $inherit_content = parent::content();
    return $inherit_content . ' more content';
  }
}
```

**Source**

https://forum.getkirby.com/t/field-inherit-from-parent-in-extended-class/4231

## Field controllers

Field controllers can be used to separate the route from the logic it contains.

### Field

Here is a field that I've shorten down just to show how to use field controllers. It only contains the route. The `action` is important because instead of adding logic, we add a function name as a string.

This file is called `boilertext.php`.

```php
class BoilertextField extends BaseField {
	public function routes() {
		return array(
			array(
				'pattern' => 'ajax/(:any)/(:any)',
				'method'  => 'get',
				'action' => 'fromController'
			)
		);
	}
}
```

### Controller

This file needs to be called `controller.php` and placed in the field folder. The name of this class also needs to match your field. In this case I match is with `BoilertextField` and just add `Controller` to it.

The `$var1` and `$var2` comes from the both `(:any)` in the field route.

```php
class BoilertextFieldController extends Kirby\Panel\Controllers\Field {
	public function fromController($var1, $var2) {
		return 'FROM CONTROLLER ' . $var1 . ' ' . $var2;
	}
}
```

**Source**

https://github.com/molocLab/kirby-calendar-board/blob/master/fields/calendarboard/controller.php

## Field assets

Working with field assets are covered well in the documentation but there are some secrets left out.

### Dynamic assets

For panel fields, you normally add the assets in your class like this:

```php
static public $assets = array(
  'css' => array('style.css'),
  'js' => array('script.js'),
);
```

The problem with it is that you can't change the name of the asset depending on a variable or condition.

#### Solution

Let's say we want to add a color config value with `c::set('my.plugin.color', 'red');`.

First we need to define a `$assets` variable in the class:

```php
class MyField extends BaseField {
  static public $assets;
}
```

Below the class we can add things to it:

```php
MyField::$assets = array(
  'css' => array('style.' . c::get('my.plugin.color') . '.css'),
  'js' => array('script.js'),
);
```

A downside to this is that we can't add the assets inside the class with this solution.

**Source + issue:** https://github.com/getkirby/panel/issues/1058

## Field routes

Kirby has routes but the fields also have their own routes. Below is a stripped down field that shows how to work with routes in fields.

```php
class BoilerField extends BaseField {
  public function routes() {
    return array(
      array(
        'pattern' => 'ajax/(:any)/(:any)',
        'method'  => 'get',
        'action' => function($var1, $var2) {
          return response::json( array( $var1, $var2 ) );
        }
      )
    );
  }
}
```

### Url format

When the route is setup in the field you can test it by visiting the url for it. Change the domain to your domain. Replace `[PAGE_ID]` with for example `projects/project-a`. Replace `[BLUEPRINT_KEY]` with for example `text` and `[FIELD_NAME]` with `textarea`.

```text
https://example.com/panel/pages/[PAGE_ID]/field/[BLUEPRINT_KEY]/[FIELD_NAME]/ajax/var1/var2
```

**Note**

Personally I prefer to use the `kirby()->routes()` function even for fields, because I find them more simple and reliable.

**Source**

https://forum.getkirby.com/t/routing-in-custom-form-field/3101/7

## Get fields object from another field

When making a field, it is sometimes needed to get the field object from another field. It's not super simple, but it's possible.

**First in the field file**

```php
use Kirby\Panel\Models\Page\Blueprint;
```

**Inside your field**

In this case I use the `default` blueprint. Then I print the `label` in the `text` field. 

```php
$blueprint = new Blueprint('default');
$fields = $blueprint->fields(null);

print_r($fields->text()->label());
```

**Source**

https://forum.getkirby.com/t/get-panel-field-object-from-another-field-within-a-field/3758