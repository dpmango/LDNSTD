//////////
// FOOTER
//////////
(function($, APP) {
  APP.Components.Footer = {
    init: function(fromPjax) {
      if (!fromPjax) {
        this.clickListeners();
      }
    },
    clickListeners: function() {
      _document.on('click', '.footer__menu-title', function(e) {
        if (window.innerWidth < 576) {
          // accradeon
          var $curTitle = $(this);

          var $titles = $('.footer__menu-title').filter(function(index, element) {
            return $(element)[0] !== $curTitle[0];
          });

          if ($titles.length === 0) return;
          $titles.each(function(i, title) {
            var $title = $(title);
            $title.removeClass('is-active');
            $title
              .parent()
              .find('ul')
              .slideUp();
          });

          $curTitle.toggleClass('is-active');
          $curTitle
            .parent()
            .find('ul')
            .slideToggle();
        }
      });
    },
  };
})(jQuery, window.APP);
