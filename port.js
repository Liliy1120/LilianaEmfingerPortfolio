
$(document).ready(function() {
$('.linktohome').on('click', function(){
    $(".contactpage").show();
    $(".projectspage").hide();
    $(".startpage").hide();
});
});

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

