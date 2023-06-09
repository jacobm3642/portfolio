$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        var hash = this.hash;
        var target = $(hash);
        var navbarHeight = $('#navbar').outerHeight();
        var offset = target.offset().top - navbarHeight;
  
        $('html, body').animate({
          scrollTop: offset
        }, 800, function() {
          window.location.hash = hash;
  
          $(window).on('hashchange', function() {
            var newHash = window.location.hash;
            var newTarget = $(newHash);
            var newOffset = newTarget.offset().top - navbarHeight;
  
            $('html, body').scrollTop(newOffset);
          });
        });
      }
    });
  });