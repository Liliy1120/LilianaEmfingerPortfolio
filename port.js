function toggleIcon() {
  $('.icon').on('click', function(){
      $('.icon').toggleClass('active');
      $('.menu-mobile').slideToggle(300);
  })
}

function closeMobileMenu(){
  $('.menu-mobile').on('click', 'a', function(){
      $('.icon').trigger('click');
  })
}

$( ".fade" ).hover(
  function() {
    $( this ).append( $( "<span> (Click here for live app)</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "p.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);
