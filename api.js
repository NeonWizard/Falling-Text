"use strict";var options={method:"GET"};function getBeeQuote(){if(!modifiers.beeQuotes){return Promise.reject("Bee Quotes disabled!");}return fetch(new Request("http://wizardlywonders.xyz:3054/line")).then(function(response){return response.json();}).then(function(data){return data.line;});}