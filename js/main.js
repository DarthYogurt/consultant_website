// Scrolling animation when clicking anchors
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -45
    }, 600);
    return false;
});

// Bootstrap scrollspy
$('body').scrollspy({ target:'.navbar', offset: 50 });
	
// Fixes carousel next/prev button functions
$('a[data-slide="prev"]').click(function() {
  $('#carousel-past-work').carousel('prev');
});

$('a[data-slide="next"]').click(function() {
  $('#carousel-past-work').carousel('next');
});