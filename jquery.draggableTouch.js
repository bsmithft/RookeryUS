/**
 * jQuery Draggable Touch v0.5
 * Jonatan Heyman | http://heyman.info
 *
 * Make HTML elements draggable by using uses touch events.
 * The plugin also has a fallback that uses mouse events,
 * in case the device doesn't support touch events.
 *
 * Licenced under THE BEER-WARE LICENSE (Revision 42):
 * Jonatan Heyman (http://heyman.info) wrote this file. As long as you retain this
 * notice you can do whatever you want with this stuff. If we meet some day, and
 * you think this stuff is worth it, you can buy me a beer in return.
 */
;(function($){
    $.fn.draggableTouch = function(action) {
        // check if the device has touch support, and if not, fallback to use mouse
        // draggableMouse which uses mouse events
        if (!("ontouchstart" in document.documentElement)) {
            return this.draggableMouse(action);
        }

        // check if we shall make it not draggable
        if (action == "disable") {
            this.off("touchstart");
            this.off("touchmove");
            this.off("touchend");
            this.off("touchcancel");
            return this;
        }

        this.each(function() {
            var element = $(this);
            var offset = null;

            var end = function(e) {
                e.preventDefault();
                var orig = e.originalEvent;

                element.trigger("dragend", {
                    top: orig.changedTouches[0].pageY - offset.y,
                    left: orig.changedTouches[0].pageX - offset.x
                });
            };

            element.on("touchstart", function(e) {
                var orig = e.originalEvent;
                var pos = $(this).position();
                offset = {
                    x: orig.changedTouches[0].pageX - pos.left,
                    y: orig.changedTouches[0].pageY - pos.top
                };
                element.trigger("dragstart", pos);
            });
            element.on("touchmove", function(e) {
                e.preventDefault();
                var orig = e.originalEvent;

                // do now allow two touch points to drag the same element
                if (orig.targetTouches.length > 1)
                    return;

                $(this).css({
                    top: orig.changedTouches[0].pageY - offset.y,
                    left: orig.changedTouches[0].pageX - offset.x
                });
            });
            element.on("touchend", end);
            element.on("touchcancel", end);
        });
        return this;
    };

    /**
     * Draggable fallback for when touch is not available
     */
    $.fn.draggableMouse = function (action) {
        // check if we shall make it not draggable
        if (action == "disable") {
            this.off("mousedown");
            this.off("mouseup");
            return this;
        }

        this.each(function() {
            var element = $(this);
            var offset = null;

            var move = function(e) {
                element.css({
                    top: e.pageY - offset.y,
                    left: e.pageX - offset.x,
                });
            };
            var up = function(e) {
                element.off("mouseup", up);
                $(document).off("mousemove", move);
                element.trigger("dragend", {
                    top: e.pageY - offset.y,
                    left: e.pageX - offset.x
                });
            };
            element.on("mousedown", function(e) {
                var pos = element.position();
                offset = {
                    x: e.pageX - pos.left,
                    y: e.pageY - pos.top
                };
                $(document).on("mousemove", move);
                element.on("mouseup", up);
                element.trigger("dragstart", pos);
                e.preventDefault();
            });
        });
        return this;
    };
})(jQuery);
