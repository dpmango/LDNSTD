//////////
// SLIDERS
//////////
(function($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        featuredProducts: {
          instance: undefined,
          disableOn: 1201,
        },
      },
    },
    init: function(fromPjax) {
      this.initSwipers();
      this.initResponsiveSwipers();
      if (!fromPjax) {
        this.listenResize();
      }
    },
    listenResize: function() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function() {
      // SWIPER EVENTS
      new Swiper('.js-swiper-events', {
        loop: true,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        normalizeSlideIndex: true,
        // freeMode: true,
        // freeModeSticky: true,
        // autoplay: {
        //   delay: 5000,
        // },
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      });

      // SWIPER ADD VISIT
      new Swiper('.js-swiper-add-visit', {
        loop: true,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        // normalizeSlideIndex: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      });

      // SWIPER NEWS CAROUSEL
      var swiperNews = new Swiper('.js-swiper-news', {
        wrapperClass: 'swiper-wrapper',
        loop: true,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 15,
        slidesPerView: '1',
        // normalizeSlideIndex: true,
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1100: {
            spaceBetween: 30,
            slidesPerView: '3',
          },
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      });
    },

    initResponsiveSwipers: function() {
      var featuredProducts = '[js-featured-products-swiper]';
      if ($(featuredProducts).length > 0) {
        this.initFeaturedProductsSwiper(featuredProducts);
      }
    },
    initFeaturedProductsSwiper: function(selector) {
      var dataObj = this.data.responsiveSwipers.featuredProducts;

      if ($(selector).length > 0) {
        if (window.innerWidth >= dataObj.disableOn) {
          if (dataObj.instance !== undefined) {
            dataObj.instance.destroy(true, true);
            dataObj.instance = undefined;
          }
        } else {
          if (dataObj.instance === undefined) {
            dataObj.instance = new Swiper(selector, {
              slidesPerView: 'auto',
              breakpoints: {
                992: {
                  spaceBetween: 0,
                },
              },
            });
          }
        }
      }
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
