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

initTabs.z = 9;
