//////////
// CONTENT
//////////
(function($, APP) {
  APP.Components.Content = {
    data: {
      nav: {
        navListHeight: 66,
        navSections: [],
        navTops: [],
        anchors: [],
      },
    },
    init: function(fromPjax) {
      this.getSections();
      if (!fromPjax) {
        this.clickListeners();
        this.listenResize();
        this.listenScroll();
      }
    },
    getSections: function() {
      // reset
      this.data.nav.navSections = [];
      this.data.nav.navTops = [];
      this.data.nav.anchors = [];

      // get elements
      var $page = $('.page').last();
      var $navSections = $page.find('.js-content-navsection');
      var $navAnchors = $page.find('.js-content-navigation a');
      if ($navSections.length === 0 || $navAnchors.length === 0) return;

      // collect tops array
      var navTopsArr = [];
      $navSections.each(function(i, el) {
        var $el = $(el);
        var elPosTop = $el.offset().top - parseInt($el.css('marginTop'), 10);
        navTopsArr.push(elPosTop);
      });

      this.data.nav.navSections = $navSections;
      this.data.nav.navTops = navTopsArr;
      this.data.nav.anchors = $navAnchors;

      this.setScrollingJustifyContentFix();
    },
    listenResize: function() {
      _window.on('resize', debounce(this.getSections.bind(this), 100));
    },
    listenScroll: function() {
      _window.on('scroll', throttle(this.scrollSections.bind(this), 25));
    },
    clickListeners: function() {
      var _this = this;

      // content navigation
      _document.on('click', '.js-content-navigation a', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $link = $(this);
        var dataToSection = $link.data('to-section');
        var $targetSection = $('[data-nav-section="' + dataToSection + '"]');
        if ($targetSection.length === 0) return;
        var $li = $link.parent();
        var direction = $li.nextAll().filter('.is-current').length > 0 ? 'prev' : 'next';

        // different offset if header is visible or not
        var contentNavigationOffset =
          direction === 'next' ? _this.data.nav.navListHeight : _this.data.nav.navListHeight + 80;
        var topTarget = $targetSection.offset().top - contentNavigationOffset;
        $('body, html').animate({ scrollTop: topTarget }, 1000);
        // TweenLite.to(window, 1, {
        //   scrollTo: { y: topTarget, autoKill: false },
        //   ease: easingSwing,
        // });
      });

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
    scrollSections: function() {
      var _this = this;
      if (this.data.nav.navSections.length === 0) return;
      var scroll = APP.Plugins.ScrollBlock.getData();

      // Collect arr of past scroll elements
      var cur = this.data.nav.navSections.map(function(idx, el) {
        var elTop = _this.data.nav.navTops[idx];
        var offset = APP.Components.Header.data.isFixedVisible
          ? _this.data.nav.navListHeight + 1
          : _this.data.nav.navListHeight + 80 + 1;

        if (elTop <= scroll.y + offset) {
          return this;
        }
      });

      // Get current section
      cur = $(cur[cur.length - 1]);
      var curSectionId = cur && cur.length ? cur.data('nav-section') : '';

      // Set/remove active class
      this.data.nav.anchors.each(function(idx, anchor) {
        var $anchor = $(anchor);
        var $li = $anchor.parent();

        if ($anchor.is("[data-to-section='" + curSectionId + "']")) {
          $li.addClass('is-current');
        } else {
          $li.removeClass('is-current');
        }
      });
    },
    setScrollingJustifyContentFix: function() {
      var $scrollSections = $('.page')
        .last()
        .find('.content-navigation__list');
      if ($scrollSections.length === 0) return;

      $scrollSections.each(function(i, sSection) {
        var $sSection = $(sSection);
        var $parent = $sSection.parent();
        var curWidth = $sSection.get(0).scrollWidth;
        var parentWidth = $parent.outerWidth();

        // equal could be with same center justify even
        if (curWidth > parentWidth) {
          $sSection.css({ 'justify-content': 'flex-start' });
        } else {
          $sSection.css({ 'justify-content': 'center' });
        }
      });
    },
  };
})(jQuery, window.APP);
