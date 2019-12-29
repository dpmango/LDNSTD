//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    data: {
      classes: {
        fixedClass: 'is-fixed',
        visibleClass: 'is-fixed-visible',
        bodyFixedVisible: 'is-header-fixed-visible',
      },
      header: {
        container: undefined,
        bottomPoint: undefined,
        isFixedVisible: false,
      },
    },
    init: function(fromPjax) {
      if (!fromPjax) {
        this.getHeaderParams();
        this.clickListeners();
        this.listenScroll();
        this.listenResize();
      }

      this.setMenuClass();
      this.controlHeaderClass();
    },
    getHeaderParams: function() {
      var $header = $('.header');
      var headerOffsetTop = 0;
      var headerHeight = $header.outerHeight() + headerOffsetTop;

      this.data.header = {
        container: $header,
        bottomPoint: headerHeight,
        isFixedVisible: false,
      };
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('body').removeClass('is-mnav-active');

      APP.Plugins.ScrollBlock.blockScroll(isOnload);
    },
    clickListeners: function() {
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('is-mnav-active');

        APP.Plugins.ScrollBlock.blockScroll();
      });

      // HEADER SEARCH
      _document
        .on('click', '.js-header-search-opener', function(e) {
          var $button = $(this);
          var $container = $('.js-header-search');

          if (window.innerWidth < 992) {
            // when in mobile view - opener acts as submit button
            if ($container.is('.is-active')) {
              // send form
              $container.submit();
            } else {
              $container.addClass('is-active');
              $container.find('input').focus();
            }
          } else {
            // desktop logic
            if ($container.is('.is-active')) {
              $container.removeClass('is-active');
            } else {
              $container.addClass('is-active');
              $container.find('input').focus();
            }
          }
        })
        .on('click', function(e) {
          if ($(e.target).closest('.js-header-search').length === 0) {
            $('.js-header-search').removeClass('is-active');
          }
        })

        // MOBILE NAVI
        .on('click', '.js-mnav-menu li.has-ul a', function(e) {
          var $link = $(this);
          var $curLi = $link.parent();

          e.preventDefault();
          e.stopPropagation();

          $curLi.siblings().removeClass('is-submenu-active');

          $curLi.addClass('is-submenu-active');
          $('.js-mnav-submenu-bg').addClass('is-visible');
        })
        .on('click', function(e) {
          if ($(e.target).closest('.mnav__menu').length === 0) {
            $('.js-mnav-menu li.has-ul').removeClass('is-submenu-active');
            $('.js-mnav-submenu-bg').removeClass('is-visible');
          }
        });
    },
    listenScroll: function() {
      _window.on('scroll', this.scrollHeader.bind(this));
      _window.on('scroll', debounce(this.scrollHeaderDebouce.bind(this), 2000, { trailing: true }));
    },
    listenResize: function() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    makeHeaderVisible: function() {
      this.data.header.container.addClass(this.data.classes.visibleClass);
      $('body').addClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = true;
    },
    makeHeaderHidden: function() {
      this.data.header.container.removeClass(this.data.classes.visibleClass);
      $('body').removeClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = false;
    },
    scrollHeaderDebouce: function() {
      console.log('deb');
      // always show header after user stop scrolling
      if (this.data.header.container !== undefined) {
        this.makeHeaderVisible();
      }
    },
    scrollHeader: function() {
      if (this.data.header.container !== undefined) {
        // get scroll params from blocker function
        var scroll = APP.Plugins.ScrollBlock.getData();

        if (scroll.blocked) return;

        if (scroll.y > this.data.header.bottomPoint) {
          this.data.header.container.addClass(this.data.classes.fixedClass);

          if (scroll.y > this.data.header.bottomPoint * 2 && scroll.direction === 'up') {
            this.makeHeaderVisible();
          } else {
            this.makeHeaderHidden();
          }
        } else {
          // emulate position absolute by giving negative transform on initial scroll
          var normalized = Math.floor(normalize(scroll.y, this.data.header.bottomPoint, 0, 0, 100));
          var reverseNormalized = (100 - normalized) * -1;
          reverseNormalized = reverseNormalized * 1.2; // a bit faster transition

          this.data.header.container.css({
            transform: 'translate3d(0,' + reverseNormalized + '%,0)',
          });

          this.data.header.container.removeClass(this.data.classes.fixedClass);
        }
      }
    },
    setMenuClass: function() {
      // SET ACTIVE CLASS IN HEADER
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;

      headerMenuList.each(function(i, val) {
        if (
          $(val)
            .find('a')
            .attr('href') === window.location.pathname.split('/').pop()
        ) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function() {
      this.data.header.container.attr('data-modifier', false);

      var $modifierElement = $('.page')
        .last()
        .find('.js-header-class');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    },
  };
})(jQuery, window.APP);
