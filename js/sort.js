(function ($){
      $('#tiles').imagesLoaded(function() {
        function comparatorName(a, b) {
          return $(a).data('name') < $(b).data('name') ? -1 : 1;
        }
        function comparatorPopularity(a, b) {
          return $(a).data('popularity') > $(b).data('popularity') ? -1 : 1;
        }
        function comparatorPrice(a, b) {
          return $(a).data('price') < $(b).data('price') ? -1 : 1;
        }

        // Prepare layout options.
        var options = {
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('#main'), // Optional, used for some extra CSS styling
          offset: 2, // Optional, the distance between grid items
          itemWidth: 210, // Optional, the width of a grid item
          comparator: comparatorName
        };

        // Get a reference to your grid items.
        var $handler = $('#tiles li'),
            $sortbys = $('#sortbys li');

        // Call the layout function.
        $handler.wookmark(options);

        /**
         * When a filter is clicked, toggle it's active state and refresh.
         */
        var onClickSortBy = function(e) {
          e.preventDefault();
          $currentSortby = $(this);
          switch ($currentSortby.data('sortby')) {
            case 'price':
              options.comparator = comparatorPrice;
              break;
            case 'popularity':
              options.comparator = comparatorPopularity;
              break;
            case 'name':
            default:
              options.comparator = comparatorName;
              break;
          }

          $sortbys.removeClass('active');
          $currentSortby.addClass('active');

          $handler.wookmark(options);
        }

        // Capture filter click events.
        $sortbys.click(onClickSortBy);
      });
    })(jQuery);