////////////////////
// AIR DATEPICKER PLUGIN
////////////////////
(function($, APP) {
  APP.Plugins.DatePicker = {
    init: function() {
      var $datepicker = $('.page')
        .last()
        .find('[js-datepicker]');
      if ($datepicker.length === 0) return;

      $datepicker.datepicker({
        language: 'en',
        minDate: new Date(),
        autoClose: true,
        // onRenderCell: function(date, cellType) {
        // },
        // onSelect: function onSelect(fd, date) {
        // },
      });
    },
  };
})(jQuery, window.APP);
