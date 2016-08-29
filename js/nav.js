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
