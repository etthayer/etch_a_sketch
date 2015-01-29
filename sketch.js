$(document).ready(function() {

  $('#press').on('click', function(){
    var x = 0;
    while (x < 500) {
      $('.container').append('<div class = grid></div>');
      x++; 
    };
    
    $('.grid').on('mouseenter', function(){
      $(this).css("opacity": "1");
    });
  });

});
