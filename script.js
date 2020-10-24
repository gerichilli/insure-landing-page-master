$(document).ready(function() {

  //animation fadeinup

  $('.js--fiu-1').waypoint(function(direction) {
    $('.js--fiu-1').addClass('animated fadeInUp');
  }, {
    offset: '80%'
  });

  $('.js--fi-1').waypoint(function(direction) {
    $('.js--fi-1').addClass('animated fadeIn');
  }, {
    offset: '80%'
  });

});