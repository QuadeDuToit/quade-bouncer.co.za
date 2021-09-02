const mix = require('laravel-mix');

mix.copyDirectory('resources/fonts', 'public/assets/fonts');
mix.copyDirectory('resources/icons', 'public/assets/icons');

mix.js('resources/js/app.js', 'public/assets/js').vue()
    .sass("resources/sass/app.scss", "public/assets/css");