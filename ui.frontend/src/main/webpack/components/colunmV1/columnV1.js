if (typeof Granite === 'undefined' || typeof Granite.author === 'undefined') {
    $(document).ready(function() {
        var originalHtmlMap = {};

        $('.container_items').each(function() {
            var $container = $(this);
            var containerId = $container.parent('.rows').attr('id');

            originalHtmlMap[containerId] = $container.html();
        });

        function updateColumns() {
            var width = $(window).width();

            $('.container_items').each(function() {
                var $container = $(this);
                var containerId = $container.parent('.rows').attr('id');

                if (width < 993 && width > 767) {
                    $container.find('div.col-md-4, div.col-md-8').each(function() {
                        var $this = $(this);
                        $this.find('.responsiveGrid').children().unwrap();
                        $this.children().unwrap();
                    });
                } else {
                    if (containerId && originalHtmlMap[containerId]) {
                        $container.html(originalHtmlMap[containerId]); 
                    }
                }
            });
        }

        $(window).on('resize orientationchange', updateColumns);
        $(window).trigger('resize');
    });
}
