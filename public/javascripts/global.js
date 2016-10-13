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

	var isActive = true;

	if($('.item-title').length < 20){
		isActive = false;
		$('.load-more').css('display', 'none');
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() >= $(document).height() - $(window).height() - 500) {
			if (isActive){
				isActive = false;
				$.ajax($('.load-more').data('link'), {
					success: function(data) {
						if (data){
							isActive = true;
							$('ul.item-section').append($.parseHTML(data));
							var link = $('.load-more').data('link');
							var links = link.split('page=');
							var newPage = parseInt(links[1]) + 1;
							link = links[0] + 'page=' + newPage;
							$('.load-more').data('link', link);
						}
						else{
							$('.load-more').css('display', 'none');
						}
					},
					error: function(data){
						console.log('error')
					}
				});
			}
		}
	});

});

