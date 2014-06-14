# Chaser

Bourbon Neat helpers for complex, mobile-first layouts.

Omega Reset mixin based on Josh Fry’s [Omega Reset for Bourbon Neat](http://joshfry.me/notes/omega-reset-for-bourbon-neat).

## Getting started

```scss
@import "path/to/bourbon";
@import "path/to/neat";
@import "path/to/chaser";
```

```scss
@include media(30em)  {
  @include span-columns(6);
  @include omega(2n);
}

@include media(48em)  {
  @include omega-reset(2n); // Pass in the previous media query's omega() argument to reset it
  @include span-columns(4);
  @include omega(3n);
}
```
