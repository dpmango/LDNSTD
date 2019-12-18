//////////
// CONTENT
//////////
(function($, APP) {
  APP.Components.Content = {
    data: {},
    init: function(fromPjax) {
      if (!fromPjax) {
        this.clickListeners();
      }
    },
    clickListeners: function() {
      var _this = this;

      // accardeon
      _document.on('click', '.js-content-accardeon .accardeon__toggler', function(e) {
        var $title = $(this);
        var $element = $title.parent();
        var $content = $element.find('.accardeon__content');
        // var $container = $element.closest('.js-content-accardeon');

        // clear previous active element(s)
        var $siblings = $element.siblings();
        if ($siblings.length > 0) {
          $siblings.each(function(i, element) {
            var $element = $(element);
            var $content = $element.find('.accardeon__content');

            if ($element.is('.is-active')) {
              $element.removeClass('is-active');
              $content.slideUp();
            }
          });
        }

        // target current element
        if ($element.is('.is-active')) {
          $element.removeClass('is-active');
          $content.slideUp();
        } else {
          $element.addClass('is-active');
          $content.slideDown();
        }
      });

      // tabs
      _document.on('click', '.js-content-tabs a', function(e) {
        var $link = $(this);
        var $li = $link.parent();
        var $container = $link.closest('.contentTabs');
        var targetTabId = $link.data('target-tab');
        var $targetTab = $container.find('.contentTabs__tab[data-tab="' + targetTabId + '"]');

        if ($targetTab.length === 0) return;

        var $siblingTabs = $targetTab.siblings();
        var $siblingLis = $li.siblings();
        // toggle classes
        // TODO - alternative class toggler .('is-active');
        $li.addClass('is-active');
        $siblingLis.removeClass('is-active');

        $siblingTabs.hide();
        $targetTab.fadeIn(250);
      });
    },
  };
})(jQuery, window.APP);
