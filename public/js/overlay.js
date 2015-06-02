define([

    'jquery'

], function($) {

    function getElement() {
        var popupTemplate = _.template($('#template-overlay').html());

        var element = $(popupTemplate());

        return element;
    }


    return {
        show: function() {
            if (this.element) {
                return;
            }
            this.element = getElement();
            $('body').append(this.element);
            setTimeout(function() {
                this.element.addClass('showElement');
            }.bind(this), 15);
        },
        hide: function() {
            if (!this.element) {
                return;
            }
            this.element
                .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                    this.element.remove();
                    this.element = null;
                }.bind(this));
            this.element.removeClass('showElement');
        }
    };
});