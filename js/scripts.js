$(document).ready(function() {



  var ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  var suits = ['clubs','diamonds','spades','hearts'];


  suits.forEach(function(suit) {
  	ranks.forEach(function(rank) {

      if (suit === "clubs" || suit === "diamonds") {
        $("ul").append('<li class="' + suit + '">' + rank + ' of ' + suit + '</li>');
      } else {

        $("ul").prepend('<li class="' + suit + '">' + rank + ' of ' + suit + '</li>');
      };


    });
  });

});
