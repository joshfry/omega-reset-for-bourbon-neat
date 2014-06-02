# [Omega Reset for Bourbon Neat](http://joshfry.me/notes/omega-reset-for-bourbon-neat/)

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
