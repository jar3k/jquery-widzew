((function ($) {

    /* Wrap low level functions */
    $.extend({

        widzew: function (url, options) {
            return $.ajax(url, options);
        },

        widzewSetup: function (target, settings) {
            return $.ajaxSetup(target, settings);
        },

        widzewPrefilter: function (prefilters) {
            return $.ajaxPrefilter(prefilters);
        },

        widzewTransport: function (transport) {
            return $.ajaxTransport(transport);
        }

    });

    /* Wrap global event handlers */
    $.each([
        'Start',
        'Stop',
        'Complete',
        'Error',
        'Success',
        'Send'
    ], function (i, type) {
        jQuery.fn['widzew' + type] = function (fn) {
            return this.on( 'ajax' + type, fn);
        };
    });

})(jQuery));
