//////////
// LAYOUT
//////////
(function($, APP) {
  APP.Plugins.LAYOUT = {
    data: {
      stickToWindow: undefined,
    },
    init: function(fromPjax) {
      this.getData();
      this.applyLayout();
      if (!fromPjax) {
        this.listenResize();
      }
    },
    getData: function() {
      this.data.stickToWindow = $('.page')
        .last()
        .find('.js-stick-to-window');
      this.data.centrifyVertical = $('.page')
        .last()
        .find('.js-centrify-vertical');
    },
    listenResize: function() {
      _window.on('resize', debounce(this.applyLayout.bind(this), 100));
    },
    applyLayout: function() {
      var _this = this;
      if (this.data.stickToWindow.length > 0) {
        this.data.stickToWindow.each(function(i, el) {
          var $el = $(el);
          var position = $el.data('position');
          var stopWatching = $el.data('stop') ? mediaCondition($el.data('stop')) : null;
          var setMarginPx = 0;

          if (stopWatching === null || !stopWatching) {
            // reset from previous resive
            $el.css({ margin: 0 });

            // get position of element to window
            var $elPosLeft = $el[0].getBoundingClientRect().left;

            // is container keeper
            var keepContainer = $el.data('keep-container');

            // set values
            if (position === 'left') {
              setMarginPx = $elPosLeft * -1;
              $el.css({ 'margin-left': setMarginPx });
              if (keepContainer) {
                $el.css({ 'padding-left': setMarginPx * -1 });
              }
            } else if (position === 'right') {
              var wWidth = window.innerWidth;
              var $elWidth = $el.innerWidth();
              var elMarginRight = Math.abs(parseInt($el.css('margin-right')));

              setMarginPx = (wWidth - $elPosLeft - ($elWidth - elMarginRight)) * -1;
              $el.css({ 'margin-right': setMarginPx });
              if (keepContainer) {
                $el.css({ 'padding-right': setMarginPx * -1 });
              }
            }

            // should stick to target element
            var fitYElement = $el.data('fit-y-element');

            if (fitYElement) {
              var $parent = $el.closest(fitYElement);
              if ($parent.length === 0) return;
              var parentPos = $parent[0].getBoundingClientRect();
              var elementPos = $el[0].getBoundingClientRect();
              var parentHeight = $parent.outerHeight();

              $el.css({ 'margin-top': parentPos.top - elementPos.top, height: parentHeight });
            }
          } else {
            $el.attr('style', '');
          }
        });
      }

      if (this.data.centrifyVertical.length > 0) {
        var maxHeight = 0;
        this.data.centrifyVertical.each(function(i, el) {
          var $el = $(el);
          var height = $el.height();
          // TODO - sort by groups
          // var group = $el.data('group');
          var stopWatching = $el.data('stop') ? mediaCondition($el.data('stop')) : null;

          if (stopWatching === null || !stopWatching) {
            // reset from previous resive
            $el.css({ 'padding-top': 0 });
            maxHeight = height > maxHeight ? height : maxHeight;
          } else {
            $el.attr('style', '');
          }
        });

        this.data.centrifyVertical.each(function(i, el) {
          var $el = $(el);
          var height = $el.height();
          var diff = maxHeight - height;
          $el.css({ 'padding-top': diff });
        });
      }
    },
  };
})(jQuery, window.APP);
