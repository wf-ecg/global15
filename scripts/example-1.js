/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var X;

function initTabs() {
    'use strict';

    var Tabs = function (sel) {
        try {
            var I = this;
            I.ele = $(sel);
            I._init(this);
        } catch (err) {
            console.warn(err);
        }
    };

    Tabs.prototype = {
        _init: function (I) {
            I.num = null;
            I.list = $();
            I.ele.find('dt').each(function (i, e) {
                var set = $(e).next().andSelf();

                I.list.push(set);
                set.data('tabnum', i + 1); //           pair and mark

                $(e).next().appendTo($(e).parent()); // reattach at the end
            });
            I._setHandle();
            I.all = $(I.list).map(function () {
                return this.toArray();
            });
        },
        setStatus: function (n, stat) {
            var I = this,
            e;

            e = I.list[n - 1];

            if (e) {
                if (stat) {
                    if (I.num) {
                        I.setInactive(I.num);
                    }
                    e.addClass('active');
                    I.num = n;
                } else {
                    e.removeClass('active');
                }
            } else {
                window.console.warn('no can do:', n, stat);
            }
        },
        setActive: function (num) {
            return this.setStatus(num, true);
        },
        setInactive: function (num) {
            return this.setStatus(num, false);
        },
        getActive: function () {
            return this.num;
        },
        _setHandle: function () {
            var I = this;
            I.ele.on('click', 'dt', function (evt) {
                var tab = $(evt.currentTarget);
                I.setActive(tab.data('tabnum'));
            // evt.target           Touched             a
            // evt.currentTarget    Touched/Watched     dt
            // evt.delegateTarget   Watcher             div
            });
        },
    };

    X = new Tabs('.tabs');
    X.setActive(1);
}


function initPics() {
    'use strict';
    var ele = $('.pics');

    function isActive(ele) {
        return $(ele).is('.active');
    }
    function slide(evt) {
        var me = $(evt.currentTarget);
        var hold = me[0].offsetParent;

        var holdSize = {
            width: hold.offsetWidth,
            height: hold.offsetHeight,
        };

        var left = me[0].offsetLeft;
        var bott = me[0].offsetHeight + me[0].offsetTop - holdSize.height;
        var reft = holdSize.width - (me[0].offsetWidth + me[0].offsetLeft);

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
            me.addClass('active');
            me.one('transitionend', slide);
        }
    }
    ele.on('click', '.pic', toggle);
}

function initVids() {
    'use strict';

    var ele = $('.vids');

    ele.one('click', '.crop', function () {
        window.alert('play');
    });
}

initTabs.z = 9;
initPics.z = 9;
initVids.z = 9;

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
