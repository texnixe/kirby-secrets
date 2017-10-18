# Kirby Boiler Readme

![Version](https://img.shields.io/badge/version-0.1-green.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Kirby Version](https://img.shields.io/badge/Kirby-2.0%2B-red.svg)

*Version 0.1*

Write a short description of what the plugin is about.

![Screenshot](https://placehold.it/888x150?text=Screenshot)

## Installation

Use one of the alternatives below.

### 1. Kirby CLI

If you are using the [Kirby CLI](https://github.com/getkirby/cli) you can install this plugin by running the following commands in your shell:

```text
$ cd path/to/kirby
$ kirby plugin:install username/plugin-name
```

### 2. Clone or download

1. [Clone](https://github.com/username/plugin-name.git) or [download](https://github.com/username/plugin-name/archive/master.zip)  this repository.
2. Unzip the archive if needed and rename the folder to `plugin-name`.

**Make sure that the plugin folder structure looks like this:**

```text
site/plugins/plugin-name/
```

### 3. Git Submodule

If you know your way around Git, you can download this plugin as a submodule:

```text
$ cd path/to/kirby
$ git submodule add https://github.com/username/plugin-name site/plugins/plugin-name
```

## Setup

### 1. Blueprint

To make it work as expected, add the following code to your blueprint:

```text
fields:
  yourfield:
    title: Your Field
    type: yourfield
```

## Usage

Text, images and videos are good things to describe how to use this plugin.

## Options

The following options can be set in your `/site/config/config.php` file:

```php
c::set('plugin.your.plugin.option1', 25);
c::set('plugin.your.plugin.option2', 'foo');
```

### option1

This option is an integer, a number which can be used for calculations.

## Changelog

**0.1**

- Initial release

## Requirements

- [**Kirby**](https://getkirby.com/) 2.0+

## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test it yourself before using it in a production environment. If you find any issues, please [create a new issue](https://github.com/username/plugin-name/issues/new).

## License

[MIT](https://opensource.org/licenses/MIT)

It is discouraged to use this plugin in any project that promotes racism, sexism, homophobia, animal abuse, violence or any other form of hate speech.

## Credits

- [Jens Törnell](https://github.com/jenstornell)
- [Mathieu Etienne](https://github.com/Thiousi/)
- [Flo Kosiol](https://github.com/flokosiol)