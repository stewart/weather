(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.content=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=this,j="function",k=c.helperMissing,l=void 0,m=this.escapeExpression;return f+="<section class='four columns' id='glyph'>",h=c.icon,g=h||b.icon,g=g===null||g===undefined||g===!1?g:g.glyph,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"icon.glyph",{hash:{}})),f+=m(g)+"</section>\n<section class='four columns' id='temperature'>\n<div class='temp two columns alpha'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.item,g=g===null||g===undefined||g===!1?g:g.condition,g=g===null||g===undefined||g===!1?g:g.temp,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.item.condition.temp",{hash:{}})),f+=m(g)+"°C</div>\n<div class='icon two columns omega'>",h=c.icon,g=h||b.icon,g=g===null||g===undefined||g===!1?g:g.temp,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"icon.temp",{hash:{}})),f+=m(g)+"</div>\n</section>\n<section class='four columns' id='location'>\n<div class='city'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.location,g=g===null||g===undefined||g===!1?g:g.city,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.location.city",{hash:{}})),f+=m(g)+"</div>\n<div class='region'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.location,g=g===null||g===undefined||g===!1?g:g.region,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.location.region",{hash:{}})),f+=m(g)+"</div>\n<div class='country'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.location,g=g===null||g===undefined||g===!1?g:g.country,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.location.country",{hash:{}})),f+=m(g)+"</div>\n</section>\n<section class='four columns' id='condition'>\n<div class='text'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.item,g=g===null||g===undefined||g===!1?g:g.condition,g=g===null||g===undefined||g===!1?g:g.text,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.item.condition.text",{hash:{}})),f+=m(g)+"</div>\n</section>\n<section class='eight columns' id='sun'>\n<div class='sunrise four columns alpha'>\n<div class='icon'>n</div>\n<div class='text'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.astronomy,g=g===null||g===undefined||g===!1?g:g.sunrise,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.astronomy.sunrise",{hash:{}})),f+=m(g)+"</div>\n</div>\n<div class='sunset four columns omega'>\n<div class='icon'>b</div>\n<div class='text'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.astronomy,g=g===null||g===undefined||g===!1?g:g.sunset,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.astronomy.sunset",{hash:{}})),f+=m(g)+"</div>\n</div>\n</section>\n<section class='four columns' id='high'>\n<h1 class='title'>High</h1>\n<div class='temp'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.item,g=g===null||g===undefined||g===!1?g:g.forecast,g=g===null||g===undefined||g===!1?g:g[0],g=g===null||g===undefined||g===!1?g:g.high,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.item.forecast.0.high",{hash:{}})),f+=m(g)+"°",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.units,g=g===null||g===undefined||g===!1?g:g.temperature,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.units.temperature",{hash:{}})),f+=m(g)+"</div>\n</section>\n<section class='four columns' id='low'>\n<h1 class='title'>Low</h1>\n<div class='temp'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.item,g=g===null||g===undefined||g===!1?g:g.forecast,g=g===null||g===undefined||g===!1?g:g[0],g=g===null||g===undefined||g===!1?g:g.low,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.item.forecast.0.low",{hash:{}})),f+=m(g)+"°",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.units,g=g===null||g===undefined||g===!1?g:g.temperature,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.units.temperature",{hash:{}})),f+=m(g)+"</div>\n</section>\n<section class='four columns' id='wind'>\n<div class='icon'>k</div>\n<div class='text'> ",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.wind,g=g===null||g===undefined||g===!1?g:g.speed,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.wind.speed",{hash:{}})),f+=m(g)+" <div class='units'>",h=c.results,g=h||b.results,g=g===null||g===undefined||g===!1?g:g.units,g=g===null||g===undefined||g===!1?g:g.speed,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"results.units.speed",{hash:{}})),f+=m(g)+"</div>\n</div>\n</section>\n",f})})()
