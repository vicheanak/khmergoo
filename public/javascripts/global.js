$(function(){
	//$('#aside-menu').animate({'width': '0px'});
	var hideNav = true;
	$('.nav-button').on('click', function(event){
		event.preventDefault();
		hideNav = !hideNav;
		if (!hideNav){
			$('#nav-list').removeClass('hide-nav');
		}
		else{
			$('#nav-list').addClass('hide-nav');
		}

	})
});

