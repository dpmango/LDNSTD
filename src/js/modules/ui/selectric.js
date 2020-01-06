////////////////////
// SELECTRIC PLUGIN
////////////////////
(function($, APP) {
  APP.Plugins.Selectric = {
    init: function() {
      var $select = $('[js-select]');
      if ($select.length === 0) return;

      $select.selectric({
        maxHeight: 250,
        disableOnMobile: false,
        nativeOnMobile: true,
        arrowButtonMarkup:
          '<div class="button"><svg class="ico ico-mono-caret"><use xlink:href="img/sprite-mono.svg#ico-mono-caret"></use></svg></div>',

        onInit: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper
            .find('.label')
            .data('value', $wrapper.find('.label').html())
            .html($elm.attr('placeholder'));
        },
        onBeforeClose: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        },
      });
    },
  };
})(jQuery, window.APP);
