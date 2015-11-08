var changeView = (function() {
  var prevousClass = '';

  var changeState = function($this) {
    var item = $this.closest('.sort__view-item');
    var view = item.data('view');
    var listOfItems = $('#product-list');
    var modificationPrefix = 'products__list_';
    var classOfViewState = modificationPrefix + view;

    if (prevousClass == '') {
      prevousClass = listOfItems.attr('class');
    }

    changeActiveClass($this);
    listOfItems.attr('class', prevousClass + ' ' + classOfViewState);

  };

  var changeActiveClass = function($this) {
    $this
      .closest('.sort__view-item').addClass('active')
      .siblings().removeClass('active');
  };

  return {
    init: function() {
      $('.sort__view-link').on('click', function(e) {
        e.preventDefault();
        changeState($(this));
        console.log('click');
      });
    }
  };
}());

$(document).ready(function() {
  if ($('.sort__select-elem').length) {
    $('.sort__select-elem').select2({
      minimumResultsForSearch: Infinity
    });
  }
  changeView.init();
});

