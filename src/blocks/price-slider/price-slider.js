var priceSlider = (function() {
  var insertValues = function($this) {
    var from = $this.closest('.price-slider').find('.price-slider__from-value');
    var to = $this.closest('.price-slider').find('.price-slider__to-value');
    var values = $this.slider('option','values');

    from.val(values[0]);
    to.val(values[1]);

  };
  return {
    init: function() {

      $('.price-slider__element').each(function() {
        var $this = $(this);
        var min = parseInt($this.data('min'));
        var max = parseInt($this.data('max'));
        $this
          .slider({
            range: true,
            min: min,
            max: max,
            values: [min, max],
            slide: function() {
              insertValues($this);
            },
            create: function() {
              insertValues($this);
            }
          });
      });
    }
  };
}()) ;

$(document).ready(function() {
  if ($('.price-slider__element').length) {
    priceSlider.init();
  }
});