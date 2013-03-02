require 'bundler'
Bundler.require(:default)
require './weather'

# sass/bourbon for stylesheets
Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

# coffeescript
use Rack::Coffee, root: 'public', urls: '/javascripts'

run Weather
