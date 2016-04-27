$(function() {
  startValues();
  mobileNav();
  smoothScroll(500);
  scrollPictures();
  contactFormSubmit();
})

/*
function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}
*/

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

    e.preventDefault(); // avoid to execute the actual submit of the form.
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

function startValues() {

}

/*
if (navigator.userAgent.match(/(\(iPod|\(iPhone|\(iPad)/)) {
  $('section.hero').css('background-position', 'scroll');
  $('section.my-work').css('background-position', 'scroll');
  $('section.contact').css('background-position', 'scroll');

  $(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    if(scrolledY > $('section.my-work').offset().top) {
      console.log('past');
    }

    if(scrolledY < $('section.hero').height()) {
        $('section.hero').css('background-position', 'center ' + ((scrolledY)) + 'px');
    }
    $('section.my-work').css('background-position', 'center ' + ((scrolledY - $('section.my-work').offset().top)) + 'px');

    $('section.contact').css('background-position', 'center ' + ((scrolledY - $('section.contact').offset().top)) + 'px');


  });
}
*/
