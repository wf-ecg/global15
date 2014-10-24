/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function initPics() {
    'use strict';
    var ele = $('.pics');
    var ME;

    function isActive(ele) {
        return $(ele).is('.active');
    }
    function slide(evt) {
        var me, hold, holdSize, left, bott, reft;

        me = $(evt.currentTarget);
        hold = me[0].offsetParent;
        holdSize = {
            width: hold.offsetWidth,
            height: hold.offsetHeight,
        };
        left = me[0].offsetLeft;
        bott = me[0].offsetHeight + me[0].offsetTop - holdSize.height;
        reft = holdSize.width - (me[0].offsetWidth + me[0].offsetLeft);

        if (isActive(me)) {
            // check if spanning past bottom, left, or right
            bott = bott > 0 ? bott : 0;
            left = left < 0 ? left * -1 : 0;
            reft = reft < 0 ? reft : 0;

            me.css({
                left: left || reft,
                bottom: bott,
            });
        }
    }
    function unzoom() {
        ME.removeClass('active');
        ME.css({
            left: 0,
            bottom: 0,
        });
        ME.one('transitionend', reset);
    }
    function zoom(evt) {
        var me = $(evt.currentTarget);

        if (!isActive(me)) {
            ME = me;
            me.addClass('active');
            me.one('transitionend', slide);
            $('body').one('mousedown', unzoom);
        }
    }
    function reset() {
        C.warn('reset zoom');
        ele.one('click', '.pic', zoom);
    }
    reset();
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
