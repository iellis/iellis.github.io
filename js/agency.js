/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// banner text change
$( document ).ready(function() {


  var counter = 0;  
  setInterval(change, 4000);
  divs = $('.intro-heading')
  current = divs[0]
  $(current).show(0)

  function change() {
   
    divs = $('.intro-heading')
    current = divs[counter]   

    $(current).fadeOut(200, function() {
      nextCounter = counter + 1;
      if (nextCounter >= divs.length) { nextCounter = 0; }
      next = divs[nextCounter]
      $(next).fadeIn(200)
    });

    counter++; 
    if(counter >= divs.length) { counter = 0; }
   
  }
});
              