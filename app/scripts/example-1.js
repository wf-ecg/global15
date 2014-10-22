var x = 1;
x++;

function initTabs() {
    var Tabs = function (sel) {
        try {
            var I = this;
            I.ele = $(sel);
            I._init(this);
        } catch (err) {
            return err
        }
    };
    Tabs.prototype = {
        _init: function (I) {
            I.num = null;
            I.list = $();
            I.ele.find('dt').each(function (i, e) {
                var set = $(e).next().andSelf();
                I.list.push(set);
                set.data('tabnum', i + 1);
                $(e).next().appendTo($(e).parent())
            });
            I.all = $(I.list).map(function () {
                return this.toArray();
            });
            I._setHandle(I);
        },
        setStatus: function (n, stat) {
            var I = this,
            e;

            e = I.list[n - 1];

            if (e) {
                if (stat) {
                    I.num && I.setInactive(I.num);
                    e.addClass('active');
                    I.num = n;
                } else {
                    e.removeClass('active');
                }
            } else {
                console.warn('no can do:', n, stat);
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
        _setHandle: function (I) {
            I.ele.on('click', 'dt', function (evt) {
                var tab = $(evt.currentTarget);
                I.setActive(tab.data('tabnum'));
            // evt.target           Touched             a
            // evt.currentTarget    Touched/Watched     dt
            // evt.delegateTarget   Watcher             div
            });
        },
    };

    x = new Tabs('.tabs');
    x.setActive(1);
}
