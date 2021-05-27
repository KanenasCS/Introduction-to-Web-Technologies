$( document ).ready(function() {
  // If the view is on mobile, increase the height of the container, to avoid overlap with the navbar 
  if( $('#detect-mobile').css('display') == 'none') {
    $('.container').css('margin-top', '175px');
  }
});
