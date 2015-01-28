/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function initVids() {
    'use strict';

    var ele = $('.vids');

    ele.one('click', '.crop', function () {
        //window.alert('play');
        var ele = $(this).data('vid');
        ele = $(ele);
        ele.show();
    });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
