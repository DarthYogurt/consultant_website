// Scrolling animation when clicking anchors
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -50
    }, 600);
    return false;
});

// Bootstrap scrollspy
$('body').scrollspy({ target:'.navbar', offset: 50 });
	