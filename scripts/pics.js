/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function initPics() {
    'use strict';
    var ele = $('.pics');

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
    function toggle(evt) {
        var me = $(evt.currentTarget);

        me.css({
            left: 0,
            bottom: 0,
        });
        if (isActive(me)) {
            me.removeClass('active');
        } else {
            me.siblings().removeClass('active');
            me.addClass('active');
            me.one('transitionend', slide);
        }
    }
    ele.on('click', '.pic', toggle);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
