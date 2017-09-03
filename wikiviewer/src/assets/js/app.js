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

  var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  var cb = '&callback=JSON_CALLBACK';
  var page = 'https://en.wikipedia.org/?curid=';

  // Prevent Reload on enter
  $(function() {
    $('form').submit(function() {
      var search = $('#search_input').val();
      $.getJSON(api + search, function(results) {
        console.log(result);
      });
      return false;
    });
  });

};
