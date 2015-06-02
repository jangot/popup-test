define([

    'jquery',
    'overlay'

], function($, overlay) {

    var popupTemplate = _.template($('#template-popup').html());

    return {
        open: function(title, content, cb) {
            if (this.element) {
                return;
            }
            this.cb = cb || function() {};
            overlay.show();
            this.element = $(popupTemplate({
                title: title,
                content: content
            }));

            $('body').append(this.element);
            this.element
                .find('.close')
                .click(function() {
                    this.close();
                }.bind(this));

            setTimeout(function() {
                this.element.addClass('showElement');
            }.bind(this), 15);
        },
        close: function() {
            if (!this.element) {
                return;
            }
            overlay.hide();
            this.element
                .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                    this.element.remove();
                    this.element = null;
                    this.cb();
                }.bind(this));
            this.element.removeClass('showElement');
        }
    }
});