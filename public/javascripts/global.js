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

	$('#more-link').on('click', function(e){
		e.preventDefault();
		$.ajax(this.href, {
			success: function(data) {
				$('ul.item-section').append($.parseHTML(data));
				var link = $('#more-link').attr('href');
				var links = link.split('more/');
				var newPage = parseInt(links[1]) + 1;
				link = links[0] + 'more/' + newPage;
				$('#more-link').attr('href', link);
				// $('#main').html($(data).find('#main *'));
				// $('#notification-bar').text('The page has been successfully loaded');
			},
			error: function(data){
				console.log('error')
			}
		});
	});

});

