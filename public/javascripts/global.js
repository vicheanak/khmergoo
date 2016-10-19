$(function(){
	$.getScript("javascripts/jquery.colorbox-min.js", function () {
		addColorbox($);
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

		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;

	// Cookies.remove('clickedPlayStore');
	if (!Cookies.get('clickedPlayStore') && isAndroid){
		$('#google-play-badge').attr('src', '/images/google-play-badge.png');
	}

	$('#google-play-badge').on('click', function(){
		Cookies.set('clickedPlayStore', 'true', { expires: 7 });
		window.location.href = "market://details?id=com.google.android.apps.maps";
	})



	$(".ajax").colorbox({width:"100%", transition:"fade",
		height:"100%",
		onLoad:function() {
        	$('html, body').css('overflow', 'hidden'); // page scrollbars off
        },
        onClosed:function() {
        	$('html, body').css('overflow', ''); // page scrollbars on
        },
        onComplete: function(response){

        	FB.XFBML.parse($('#cboxLoadedContent')[0]);
        	// $('.html-item-description').contents().filter(function() {
        	// 	return this.nodeType == 3;
        	// }).remove();
        	// $('.html-item-description').contents().filter(function() {
        	// 	if(this.nodeType != 3 && this.innerHTML.trim() == '' && this.tagName !== 'IMG'){
        	// 		console.log('remove', this.innerHTML);
        	// 	}
        	// 	else{
        	// 		console.log('not remove', this)
        	// 	}
        	// 	return this.nodeType != 3 && this.innerHTML.trim() == '' && this.tagName !== 'IMG';
        	// }).remove();
        }
    });

	$(window).scroll(function () {
		if ($(window).scrollTop() >= $(document).height() - $(window).height() - 500) {
			if (isActive){
				isActive = false;
				$.ajax($('.load-more').data('link'), {
					success: function(data) {
						if (data){
							isActive = true;

							var dataHtml = $(data);
							$('ul.item-section').append(dataHtml);
							dataHtml.find('li').addBack('li').each(function( index, element ) {
								FB.XFBML.parse($(this)[0]);
							});
							var link = $('.load-more').data('link');
							var links = link.split('page=');
							var newPage = parseInt(links[1]) + 1;
							link = links[0] + 'page=' + newPage;
							$('.load-more').data('link', link);
							$(".ajax").colorbox({width:"100%", transition:"fade",
								height:"100%",
								onLoad:function() {
						        	$('html, body').css('overflow', 'hidden'); // page scrollbars off
						        },
						        onClosed:function() {
						        	$('html, body').css('overflow', ''); // page scrollbars on
						        }
						    });
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
});

