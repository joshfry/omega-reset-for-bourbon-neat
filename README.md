# [Omega Reset for Bourbon Neat](http://joshfry.me/notes/omega-reset-for-bourbon-neat/)

**Latest `omega-reset()` located in `dist/`**

## Usage

    @include media(30em)  {
      @include span-columns(6);
      @include omega(2n);
    }
    @include media(48em)  {
      @include omega-reset(2n); // Pass in the previous media query's omega() argument to reset it
      @include span-columns(4);
      @include omega(3n);
    }

---

## Testing/Development

- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Sass](http://sass-lang.com/)
  - [Bourbon](http://bourbon.io/)
  - [Bourbon Neat](http://neat.bourbon.io/)

### Install

    $ rake

- Installs Ruby Gems to `/vendor/ruby`
- Installs Bower packages to `/vendor/bower`
- Installs npm modules to `/node_modules`

### Grunt

    $ grunt dev

- [localhost:8000](http://localhost:8000)
- Livereload
- Compiles Scss

    $ grunt build

- Run this before commiting/pushing to repo
- Copies latest `_omega-reset.scss` to `dist/`
