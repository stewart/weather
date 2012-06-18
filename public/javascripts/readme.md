# weather - javascripts

This folder has the Javascript libraries for the Weather app, with a couple extras.

## Handlebars

Weather uses a Handlebars template for the content of the site. The template source is in `content.handlebars`.

It gets compiled via the `handlebars` CLI into `template.js`. This means that the Handlebars compiler doesn't have to be sent to the client, and the template doesn't have to be compiled client-side.

For more info on Handlebars precompilation, check out [this](http://handlebarsjs.com/precompilation.html).

To compile the template, use the command

    handlebars content.handlebars -mf template.js

## CoffeeScript

Thanks to `rack-coffee`, any CoffeeScript files in this directory can be served as JS to the client.

For example, if you have a `script-test.coffee` file in this directory, you can put it into the browser as a request to `/javascripts/script-test.js`, and Rack will compile the CoffeeScript into Javascript and send it to the browser.
