// Crawler 

// imports
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
// var prompt = require('prompt-sync')();
// var fs = require('fs')

// Target

var pageTarget = "https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm"

console.log("\n", "Page:  " + pageTarget, "\n");

// function for detecton error, responde and body

request(pageTarget, function(er, res, body) {
  if(er) {console.log("Error: " + er , "\n");
    } else {
      console.log("Status: " + res.statusCode, "\n");
    }
    
    var $ = cheerio.load(body);
    
    $('.lister-list tr').each(function(){
    var title = $(this).find('.titleColumn a').text().trim();
    var rat = $(this).find('.imdbRating strong').text().trim();

    // output
    console.log("Title: " + title + " || " + "Rating: " +  rat, "\n")

   });
});