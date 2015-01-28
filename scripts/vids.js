/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function initVids() {
    'use strict';

    var tmbs = $('.vids');

    tmbs.one('click', '.crop', function () {
        var wrap = $($(this).data('vid'));

        wrap.on('click', function (evt) {
            if ($(evt.target).is(wrap)) {
                W.location.reload();
            }
        }).show().find('.vjs-big-play-button').click();
    });

//    var vids = $('.vidwrap video');
//    vids.each(function() {
//        videojs(this, {}, function () {
//            C.log(this);
//        });
//    });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
