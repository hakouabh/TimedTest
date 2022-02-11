const mix = require('laravel-mix');
const path = require('path');

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
})

 mix.webpackConfig({
    resolve: {
        symlinks: false,
        alias: {
            'Components': path.resolve(__dirname, 'resources/js/components/'),
            'Store': path.resolve(__dirname, 'resources/js/store/')
        }
    }
});

 mix.js('resources/js/app.js', 'public/js/main.js')
 .vue()
 .sass('resources/sass/app.scss', 'public/css/style.css');
