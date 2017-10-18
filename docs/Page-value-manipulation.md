Let's say you want to overwrite the field values of a page object. It's not as simple as it sounds.

**In this example I will show you how you do that.**

```php
class Test extends Page {
	private $array = array(
		'title' => 'My overwritten title!',
		'text' => 'My overwritten text!',
		'addresses' => 'My overwritten address!'
	);

	function title() {
		return $this->__call('title');
	}

	function __call($key, $arguments = NULL){
		$call = parent::__call($key, $arguments = NULL);
		if(is_object($call) && get_class($call) == 'Field') {
			if(is_array($this->array) && array_key_exists($key, $this->array)) {
				$call->value = $this->array[$key];
			}
		}
		return $call;
	}
}
	
$new = new Test($page->parent(), $page->dirname());

echo $new->title();
echo $new->text();
echo $new->addresses();
```

**Results**

```text
My overwritten title!
My overwritten text!
My overwritten address!
```

### What the code does

First I create my own class that I call `Test` which extends the `Page` class.

In my case I have set up an array with key/value pair, where I want to use the values instead of the original page values.

In `__call` I check if the key exists in the array. If it does, it will use my new value, else it will just go with the old one.

For some reason I also needed to add the `title` function which should normally be taken care of by the `__call`, but in this case I needed to force it to do a call as well.

I create a new instance of a class that I call `$new`. It needs both a parent and a dirname as arguments. That means that you need to base it on an already existing page.