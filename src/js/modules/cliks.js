//////////
// CICKS
//////////
(function($, APP) {
  APP.Plugins.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        .on('click', '[js-link]', function(e) {
          var dataHref = $(this).data('href');
          if (dataHref && dataHref !== '#') {
            e.preventDefault();
            e.stopPropagation();
            Barba.Pjax.goTo(dataHref);
          }
        })
        // prevent going the same link (if barba is connected)
        .on('click', 'a, [js-link]', function(e) {
          var href = $(this).data('href') || $(this).attr('href');
          var path = window.location.pathname;

          if (href === path.slice(1, path.length)) {
            e.preventDefault();
            e.stopPropagation();
          }
        })
        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          $('body, html').animate({ scrollTop: topTarget }, 1000);

          return false;
        })
        // grid toggler
        .on('click', '[js-show-grid]', function() {
          $(this).toggleClass('is-active');
          $('.demo-grid').fadeToggle();
        })
        // pagination
        .on('click', '[js-pagination]', function() {
          var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
          // $('.cdp_i').on('click', function() {
          var go = $(this)
            .attr('href')
            .replace('#!', '');
          if (go === '+1') {
            paginationPage++;
          } else if (go === '-1') {
            paginationPage--;
          } else {
            paginationPage = parseInt(go, 10);
          }
          $('.cdp').attr('actpage', paginationPage);
        });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
