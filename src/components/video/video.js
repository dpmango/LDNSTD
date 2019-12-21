//////////
// VIDEO
//////////
(function($, APP) {
  APP.Components.Video = {
    data: {
      hasYoutubeScript: false,
      youtubeApiReady: false,
      YTPlayer: undefined,
    },
    init: function(fromPjax) {
      this.loadYoutubeScripts();
      if (!fromPjax) {
        this.clickListeners();
      }
    },
    clickListeners: function() {
      var _this = this;

      _document.on('click', '.js-video .video__play', function(e) {
        var $btn = $(this);
        var $container = $btn.closest('.js-video');
        var type = $container.data('type');
        var isPlaying = $container.is('.is-playing');

        if (!isPlaying) {
          $container.addClass('is-playing');
        } else {
          $container.removeClass('is-playing');
        }

        if (type === 'html') {
          var video = $container.find('video').get(0);
          if (!isPlaying) {
            video.play();
          } else {
            video.pause();
          }
        } else if (type === 'iframe') {
          var $video = $container.find('iframe');
          if (_this.data.youtubeApiReady) {
            if (!isPlaying) {
              if (!_this.data.YTPlayer) {
                _this.data.YTPlayer = new YT.Player($video.get(0), {
                  events: {
                    onReady: function(event) {
                      event.target.playVideo();
                    },
                  },
                });
              } else {
                _this.data.YTPlayer.playVideo();
              }
            } else {
              _this.data.YTPlayer.stopVideo();
            }
          }
        }
      });
    },
    loadYoutubeScripts: function() {
      if (!this.data.hasYoutubeScript) {
        var $ytVideo = $('.page')
          .last()
          .find('.js-video[data-type="iframe"]');

        if ($ytVideo.length === 0) return;

        // loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.data.hasYoutubeScript = true;
      }
    },
  };
})(jQuery, window.APP);

function onYouTubeIframeAPIReady() {
  console.log('youtube api ready');
  APP.Components.Video.data.youtubeApiReady = true;
}
