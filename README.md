# generator-django-environ [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Create a django project with django environ

## Installation

First, install [Yeoman](http://yeoman.io) and generator-django-environ using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-django-environ
```

Then generate your new project:

```bash
yo django-environ
```

## Project structure

This project uses [django environ](https://github.com/joke2k/django-environ) to handle the project settings. The project will have 4
settings files:

- base.py

  `base.py` holds the shared configuration.

- dev.py

  `dev.py` should be used during development.

- test.py

  `test.py` is used when running the tests with `py.test`.

- prod.py

  `prod.py` is used as default settings file. It has only one required setting at the moment, the `SECRET_KEY`


### Specifying settings

In order to use the development setttings file, you should set the **DJANGO\_SETTINGS\_MODULE**.
You can do this in two ways. one is to set it as an environ variable, the other way is to
create an `.env` file with the setting.

```
DJANGO_SETTINGS_MODULE=myapp.settings.dev
```

You can use this file to specify all the other settings:

- DEBUG
- ALLOWED_HOSTS
- SECRET_KEY

## License

MIT © [Patrick Arminio]()


[npm-image]: https://badge.fury.io/js/generator-django-environ.svg
[npm-url]: https://npmjs.org/package/generator-django-environ
[travis-image]: https://travis-ci.org/patrick91/generator-django-environ.svg?branch=master
[travis-url]: https://travis-ci.org/patrick91/generator-django-environ
[daviddm-image]: https://david-dm.org/patrick91/generator-django-environ.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/patrick91/generator-django-environ
[coveralls-image]: https://coveralls.io/repos/patrick91/generator-django-environ/badge.svg
[coveralls-url]: https://coveralls.io/r/patrick91/generator-django-environ
