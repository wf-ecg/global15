/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function initVids() {
    'use strict';

    var ele = $('.vids');

    ele.one('click', '.crop', function () {
        var ele = $(this).data('vid');
        ele = $(ele);

        ele.on('click', function (evt) {
            if ($(evt.target).is(ele)) {
                W.location.reload();
            }
        }).show();
    });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
