const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir(function(mix) {
    mix.sass('./resources/css/app.scss', './build/app.css')
       .webpack('./resources/js/app.js', './build/app.js')
});