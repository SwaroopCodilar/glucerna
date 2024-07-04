if (typeof Granite === 'undefined' || typeof Granite.author === 'undefined') {
    $(document).ready(function() {
        var originalHtml = $('.container_items').html();

        function updateColumns() {
            var width = $(window).width();
            var $container = $('.container_items');

            if (width < 993 && width > 767) {
                $container.find('div.col-md-4, div.col-md-8').each(function() {
                    $(this).find('.responsiveGrid').children().unwrap();
                    $(this).children().unwrap();
                });
            } else {
                $container.html(originalHtml);
            }
        }

        $(window).on('resize', updateColumns);
        updateColumns();

        $(window).on('orientationchange', function() {
            updateColumns();
        });
    });
}
