//////////
// Google MAPS
//////////
(function($, APP) {
  APP.Plugins.Gmaps = {
    data: {
      scriptsCreated: false,
      gmapsLoaded: false,
    },
    init: function() {
      if ($('.js-gmap').length > 0) {
        if (this.data.gmapsLoaded) {
          this.initMaps();
          // google.maps.event.addDomListener(window, 'load', _this.initMaps.bind(this));
        } else {
          this.tryLoadScripts();
        }
      }
    },
    createScripts: function() {
      var gKey = 'AIzaSyAfuintIeTkWllbOnvyju_B6nbYLDcUoMk';
      var gScript = document.createElement('script');
      gScript.type = 'text/javascript';
      gScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + gKey;
      $('head').append(gScript);
      this.data.scriptsCreated = true;
    },
    tryLoadScripts: function() {
      var _this = this;
      if (!_this.data.scriptsCreated) {
        _this.createScripts();
      }

      var ticker = setInterval(readyChecker, 250);
      function readyChecker() {
        if (!_this.data.gmapsLoaded) {
          try {
            if (google) {
              _this.data.gmapsLoaded = true;
              _this.init(); // reinit
              clearInterval(ticker);
            }
          } catch (e) {
            // console.log('maps not ready yeat, another try');
          }
        }
      }
    },
    initMaps: function() {
      var _this = this;
      $('.js-gmap').each(function(i, domElement) {
        _this.drawMap(domElement);
      });
    },
    drawMap: function(domElement) {
      var _this = this;
      var $domElement = $(domElement);
      if ($domElement.length === 0) return;

      console.log('drawing');
      var params = {
        center: _this.geoStringToArr($domElement.data('center')),
        zoom: $domElement.data('zoom') || 10,
        // placeholder: {
        //   geodata: _this.geoStringToArr($domElement.data('placeholder')),
        //   caption: $domElement.data('placeholder-caption'),
        //   balloon: $domElement.data('placeholder-balloon'),
        // },
      };

      var map = new google.maps.Map($domElement.get(0), {
        zoom: params.zoom,
        center: params.center,
      });
    },
    geoStringToArr: function(str) {
      var split = str.split(',');
      if (split.length === 2) {
        return { lat: parseFloat(split[0]), lng: parseFloat(split[1]) };
      }

      return false;
    },
  };
})(jQuery, window.APP);
