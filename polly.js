' '
	/**
		Polly Javascript file
	**/

	// console.log(Polly)

	if(!Polly.config.publicationId){
		Polly.config.publicationId = 'fiB5dA5C9D6tieKdq'
	}

	if(!Polly.config.helpcenter){
		Polly.config.helpcenter = {
			width: 900, // Helpcenter lightbox width
			height: 500, // Helpcenter lightbox height
			closeButtonBackgroundColor: '#fff', // background color of close button
			closeButtonForegroundColor: '#000' // foreground / text color of close button
		}
	}


	/**
		Defining the required Polly js functions. Do not edit unless you know what you're doing.
	**/ 
	Polly.insertHTML = function () {
		var wrapper = $('<div/>', {
	    'id':'polly_help_window_wrapper'    
			})

		var contentdiv = $('<div/>', {
			'style' : 'width: ' + Polly.config.helpcenter.width + 'px; height: '+ Polly.config.helpcenter.height + 'px;'
		})

		contentdiv.append('<span onclick="Polly.closeHelp()" class="close" style="background-color: '+Polly.config.helpcenter.closeButtonBackgroundColor+'; color: '+Polly.config.helpcenter.closeButtonForegroundColor+'">X</span>'
			+'<iframe sandbox="allow-same-origin allow-scripts allow-popups" style="display:none;" id="polly_help_iframe" src="" frameborder="0" height="'+Polly.config.helpcenter.height+'" width="'+Polly.config.helpcenter.width+'"></iframe>'
			+ '<span class="polly_loader">loading polly help center</span>')

		wrapper.append(contentdiv);

		$('body').append(wrapper);

		$('#polly_help_iframe').load(function() {
			$('.polly_loader').hide();
			$('#polly_help_iframe').show();
		})

		// $('#polly_help_iframe').attr('src',')
		
	}

	Polly.openHelp = function (src) {

		var $iframe = $('#polly_help_iframe');
		if ( $iframe.length ) {
	        if($iframe.attr('src') == ''){
	        	var src = src ? src : 'https://app.polly.help/help/'+Polly.config.publicationId
	        	$iframe.attr('src',src); 
	        }

	        $('#polly_help_window_wrapper').show();
	    } else {
	    	console.log('some error has occured.')
	    }

		// if(src){

		// 	$('#polly_help_window_wrapper').show();

		// 	// var articleId = $(src).data('articleid');

		// 	// todo: generate dynamic url for viewing this article
		// 				// var url = "http://polly-alpha.meteor.com/help/"+viewId+"/topic/abc/article/"+articleId;

		// 	
		//     if ( $iframe.length ) {
		//         $iframe.attr('src',src);  

		//     }

		// }

	    
	}

	Polly.closeHelp = function () {
		$('#polly_help_window_wrapper').hide();
	}

	$(window).load(function() {
		// console.log('window loaded')
		Polly.insertHTML();
	});
