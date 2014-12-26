/**
 * Mofafix.js v1.0.0
 * Licensed under MIT
 */

(function($) {

  $.fn.mofafix = function() {

    return this.each(function() {

      var $element = $(this);

      $element.on('mousewheel', function(e) {

        var direction = e.deltaY, //滚动条向上移动时>0,向下移动时<0

            //滚动条到底时
            bottom = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
            
            //滚动条到顶时
            top = this.scrollTop <= 0;

        if ((direction < 0 && bottom) || (direction > 0 && top)) {
            e.preventDefault();
        }

      });

    });

  };

})(jQuery);