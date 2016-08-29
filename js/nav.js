$(document).ready(function(){

$('#bio').click(function() {
  if($('.portfolio').css('display', 'none')) {
     $('.bio').fadeIn(600);
     }
   else {
     $('.portfolio').css('display', 'none');
     $('.bio').fadeIn(600);
     }
});

$('#portfolio').click(function() {
  if($('.bio').css('display', 'none')) {
     $('.portfolio').fadeIn(600);
     }
   else {
     $('.bio').css('display', 'none');
     $('.portfolio').fadeIn(600);
     }
});

});

/*issues: default on bio (css display set)                     √
          properly clear previous content before transitioning
          (control flow + .css(display, none))                 √
          make sure blog link continues to function            √
          stop href=# repositioning (preventDefault)
          not working on first click
          maybe change to button...?                           ~
          fade in correctly between items (fadeIn)             √
          script site in header ((doc).ready(func...))         √


*/
