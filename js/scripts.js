$(document).ready(function() {



  var ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  var suits = ['clubs','diamonds','spades','hearts'];

  // var cards = [];

  suits.forEach(function(suit) {
  	ranks.forEach(function(rank) {
      $("ul").append('<li class="' + suit + '">' + rank + " of " + suit + "</li>");
    	// cards.push(rank + " of " + suit);
    });
  });

});
