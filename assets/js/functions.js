$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});

$(function() {
  mobileNav();
  smoothScroll(500);
  scrollPictures();
  contactFormSubmit();
})

function contactFormSubmit() {
  $('#contact-form').submit(function(e) {
    var url = 'https://formspree.io/hi@fabiowallner.com';

    $.ajax({
           type: 'POST',
           url: url,
           data: $("#contact-form").serialize(),
           dataType: 'json',
           success: function(data)
           {
               $('#contact-form').hide('slow');
               $('div.form-submitted').show('slow');
           }
         });

    e.preventDefault();
  });
}

function scrollPictures() {
  var xH
    $('.thumbnail').hover(
    function () {
        xH = $(this).children("img").css("height");
        xH = parseInt(xH);
        xH = xH - parseInt($(this).css("height"));
        xH = "-" + xH + "px";
        $(this).children("img").css("top", xH);
    }, function () {
        $(this).children("img").css("top", "0px");
    });
}

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav-toggle').toggleClass('is-open');
    $('.mobile-nav').slideToggle('slow');
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
    $('.mobile-nav-toggle, .mobile-nav').toggleClass('is-open');
	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
