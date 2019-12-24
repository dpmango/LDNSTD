//////////
// STICKY KIT
//////////
(function($, APP) {
  APP.Plugins.Sticky = {
    init: function() {
      this.initStickyKit();
      this.initCustomSticky();
    },
    initStickyKit: function() {
      var $elements = $('.page')
        .last()
        .find('.js-sticky');

      if ($elements.length === 0) return;

      $elements.each(function(i, sticky) {
        var $sticky = $(sticky);
        var dataOffsetTop = $sticky.data('offset-top')
          ? parseInt($sticky.data('offset-top'), 10)
          : 0;

        $sticky.stick_in_parent({
          // eslint-disable-next-line camelcase
          offset_top: dataOffsetTop,
          // eslint-disable-next-line camelcase
          // inner_scrolling: false,
        });
      });
    },
    initCustomSticky: function() {
      var $stickyNav = $('.page')
        .last()
        .find('.js-sticky-nav');
      if ($stickyNav.length === 0) return;

      _window.on(
        'scroll',
        throttle(function() {
          // get scroll params from blocker function
          var scroll = APP.Plugins.ScrollBlock.getData();
          var stickyTop = $stickyNav.offset().top;

          if (scroll.y > stickyTop) {
            $stickyNav.addClass('is-sticky');
          } else {
            $stickyNav.removeClass('is-sticky');
          }
        }, 50)
      );
    },
  };
})(jQuery, window.APP);
