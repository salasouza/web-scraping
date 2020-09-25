// Crawler 

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

const prompt = require('prompt-sync')();

const pageTarget = prompt('What is the Target?');

console.log("Page " + pageTarget);

request(pageTarget, function(error, response, body) {

   if(error) {

     console.log("Error: " + error);

   } else {

    console.log("Status: " + response.statusCode);

   }


});