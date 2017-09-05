/*jshint esversion: 6 */

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

window.onload = function () {

  const cors = 'https://cors-anywhere.herokuapp.com/'

  const api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  const random_article = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts&exintro=&explaintext=&explaintext=&grnlimit=10';
  const cb = '&callback=JSON_CALLBACK';
  const page = 'https://en.wikipedia.org/?curid=';

  // Page ID http://en.wikipedia.org/?curid=2581752

  function shortenString(str) {
    if(str.length >= 180) {
      return str.substring(0, 170) + '...';
    }
    return str;
  }

  // Prevent Reload on enter
  $(function() {

    $('form').submit(function() {
      var search = $('#search_input').val();
      $.getJSON(cors + api + search, function displayResults(results) {
        $('#results').empty();
        console.log(results);
        $.each(results.query.pages, function(i, value) {
          $('#results').append('<div id="result_spacing" class="row align-center"><div class="large-8 columns"><div class="callout"><h4>' + value.title + '</h4>' + '<p>' + shortenString(value.extract) + '</p>' + '</div></div>');
        });
      });
      return false;
    });

    $('#clear, #search_close').each(function() {
      $(this).click(function(i) {
      i.preventDefault();
      $('#results').empty();
      });
    });

    $('#random').click(function(i) {
      i.preventDefault();
      $.getJSON(cors + random_article, function displayResults(results) {
        $('#results').empty();
        console.log(results);
        $.each(results.query.pages, function(i, value) {
          $('#results').append('<div id="result_spacing" class="row align-center"><div class="large-8 columns"><div class="callout"><h4>' + value.title + '</h4>' + '<p>' + shortenString(value.extract) + '</p>' + '</div></div>');
        });
      });
    });
  });

}
