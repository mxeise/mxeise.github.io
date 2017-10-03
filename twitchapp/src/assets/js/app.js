import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

window.onload = function() {

  var regular_streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  var streamer = {
    id: "",
    name: "",
    bio: "",
    logo: ""
  };

  function getTwitch(streamer) {
    //$.each(streamer, function() {
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamer + '?callback=?', function(data) {
        console.log(data);
        setInformation(data.stream.channel.display_name, data.stream.channel.status, data.stream.channel.logo);
      });
    //});
  }

  function setInformation(username, description, img) {
    console.log('LAL');
    $('#player_username').html(username);
    $('#player_description').html(description);
    $('#player_logo').attr('src', img);
  }

  getTwitch('ESL_SC2');
  //getPlayerInfo(regular_streamers);

};
