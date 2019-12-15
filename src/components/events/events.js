//////////
// EVENTS
//////////
(function($, APP) {
  APP.Components.Events = {
    init: function(fromPjax) {
      if (!fromPjax) {
        this.clickListeners();
      }
    },
    clickListeners: function() {
      _document.on('click', '.js-events-filter a', function(e) {
        var $link = $(this);

        $link.siblings().removeClass('is-active');
        $link.addClass('is-active');
      });
    },
  };
})(jQuery, window.APP);
