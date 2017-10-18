# Snippet

## Get all snippet arguments

We can send arguments to a snippet. We can also get all the arguments from inside the snippet.

**Template / snippet**

```php
snippet('my-snippet', ['car' => true, 'boat' => false]);
```

**Snippet**

```php
print_r(get_defined_vars()['_data']);
```

**Results**

```text
array(
  'car'  => true
  'boat' => false
)
```

## Snippet preview

To preview snippets outside the normal pages is not as simple as it seems.

Except reading the html, it also needs to read the page `$page` object. That require the snippet to know which template to use.

### Function needed

It takes `$template`, `$data` and `$page`. It returns a html output. 

```php
class SnippetPreview extends Kirby\Component\Template {
  public function render($template, $data = [], $page = null) {
    $file = $template;
    $data = $this->data($page, $data);

    if(!file_exists($file)) {
      throw new Exception('The template could not be found');
    }

    $tplData = tpl::$data;
    tpl::$data = array_merge(tpl::$data, $data);
    $result = tpl::load($file, null);
    tpl::$data = $tplData;

    return $result;
  }
}
```

### How to use it

First we declare our class to a variable. Then we use `render` with a snippet, an empty array and a page object. The class is asking for a template, but we can send a snippet as well.

```php
$SnippetPreview = new SnippetPreview(kirby());

$data = $SnippetPreview->render(
	kirby()->roots()->snippets() . DS . 'menu.php',
	array(),
	page('about')
);

echo $data;
```

**Source**

https://forum.getkirby.com/t/global-site-page-pages-in-route-snippet/5407/5