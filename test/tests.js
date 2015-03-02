// TODO Add tests for all methods.

var lifecycle = {
    setup: function () {
        this.options = {
            cache: false,
            url: 'data/setup.json',
            text: 'json'
        };
    },
    teardown: function() {
        jQuery(document).off('ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess');
        jQuery.ajaxSetup({});
    }
};


module('Low level', lifecycle);

test('Simple call', function () {
    var url = 'data/name.html';

    var widzew = $.widzew(url, this.options);
    var expected = $.ajax(url, this.options);

    propEqual(widzew, expected);
});

test('Setup', function () {
    $.widzewSetup({
        cache: false,
        url: 'data/setup.json',
        text: 'json'
    });

    var widzew = $.widzew();
    var ajax = $.ajax();

    strictEqual(widzew.responseJSON, ajax.responseJSON);
});

test('Pre-filter', function () {
    $.widzewPrefilter(function (options) {
        options.text = 'json';
        options.url = 'data/setup.json';
    });    

    var widzew = $.widzew(this.options);
    var ajax = $.ajax(this.options);
    
    strictEqual(widzew.responseJSON, ajax.responseJSON);
});
