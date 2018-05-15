$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$(function(){
	
	$("#top").click(function () {
		$("html, body").animate({scrollTop: 0}, 500);
	});	
});