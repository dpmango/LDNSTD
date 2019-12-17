//////////
// Scaler Mobile
//////////
(function($, APP) {
  APP.Plugins.ScalerMobile = {
    init: function(fromPjax) {
      this.getScaler();
      this.setScaler();
      if (!fromPjax) {
        this.listenResize();
      }
    },
    getScaler: function() {
      var $images = $('.page')
        .last()
        .find('[js-scaler-mobile]');
      if ($images.length > 0) {
        $images.each(function(i, img) {
          var $img = $(img);
          var desktopArPx = $img.css('padding-bottom');
          var imgWidth = $img.width();
          var dekstopArPercent = (desktopArPx.slice(0, -2) / imgWidth) * 100 + '%';
          // save desktop ar value in %
          $img.attr('data-ar-desktop', dekstopArPercent);
        });
      }
    },
    listenResize: function() {
      _window.on('resize', debounce(this.setScaler.bind(this), 100));
    },
    setScaler: function() {
      var $images = $('.page')
        .last()
        .find('[js-scaler-mobile]');

      if ($images.length > 0) {
        var wWidth = window.innerWidth;
        $images.each(function(i, img) {
          var $img = $(img);
          var mobileAr = $img.data('ar-768');
          var desktopAr = $img.data('ar-desktop');

          if (mobileAr) {
            if (wWidth < 768) {
              $img.css({ 'padding-bottom': APP.Plugins.ScalerMobile.setAr(mobileAr) });
            } else {
              $img.css({ 'padding-bottom': APP.Plugins.ScalerMobile.setAr(desktopAr) });
            }
          }
        });
      }
    },
    setAr: function(ar) {
      // please also check _media.sass for possible values
      if (ar === '1:1') {
        return '100%';
      } else if (ar === '16:9') {
        return '56.25%';
      } else if (ar === '4:3') {
        return '75%';
      } else if (ar === '21:9') {
        return '42.85%';
      } else {
        var arAsWidthHeight = ar.split('/');
        if (arAsWidthHeight.length === 2) {
          return (parseInt(arAsWidthHeight[0]) / parseInt(arAsWidthHeight[1])) * 100 + '%';
        }
      }

      return ar;
    },
  };
})(jQuery, window.APP);
