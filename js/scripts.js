$(document).ready(function() {



  var ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  var suits = ['clubs','diamonds','spades','hearts'];

  createListItem = (function (suit,rank) {
    $("ul").append('<li class="' + suit + '">' + rank + ' of ' + suit + '</li>');
  });


  for (var i = 0; i < suits.length; i++) {
    if (suits[i] === "clubs" || suits[i] === "diamonds") {
      for (var j = 0; j < ranks.length; j++) {
        createListItem(suits[i],ranks[j]);
      }
    } else {
      for (var k = ranks.length - 1; k>=0 ; k--) {
        createListItem(suits[i],ranks[k]);
      }
    }
  }


  // suits.forEach(function(suit) {
  // 	ranks.forEach(function(rank) {
  //
  //     if (suit === "clubs" || suit === "diamonds") {
  //       $("ul").append('<li class="' + suit + '">' + rank + ' of ' + suit + '</li>');
  //     } else {
  //
  //       $("ul").prepend('<li class="' + suit + '">' + rank + ' of ' + suit + '</li>');
  //     };
  //
  //
  //   });
  // });

});
