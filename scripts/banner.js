/*jslint white:false */
/*globals $, initTabs:true */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(function () {
    var banner = $('#slider');

    if (banner.length) {
        banner.nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 10000,
            startSlide: 0,
            directionNav: true,
            directionNavHide: true,
            controlNav: false,
            controlNavThumbs: false,
            controlNavThumbsFromRel: false,
            controlNavThumbsSearch: '.jpg',
            controlNavThumbsReplace: '_thumb.jpg',
            keyboardNav: true,
            pauseOnHover: true,
            manualAdvance: false,
            captionOpacity: 0.8,
            prevText: '«',
            nextText: '»',
            randomStart: true,
            z: 0
        });
    }
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
