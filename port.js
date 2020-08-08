
$(function() {
	function enableButtons() {
  	var index = $('li.selected').index();
    var count = $('#content li').length;
    $('#up').prop('disabled', index === 0);
    $('#down').prop('disabled', index === count - 1);
  }
  enableButtons();
  $('#controls button').click(function() {
  	var dir = $(this).data('dir');
    var index = $('li.selected').index() + dir;
    $('#content li').removeClass('selected').eq(index).addClass('selected');
    enableButtons();
  });
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 

