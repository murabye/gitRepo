"use strict";
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];

jQuery.fn.extend({
    // Modified and Updated by MLM
    // Origin: Davy8 (http://stackoverflow.com/a/5212193/796832)
    parentToAnimate: function(newParent, duration) {
        duration = duration || 'slow';

        var $element = $(this);
        //console.log($element);
        if($element.length > 0)
        {

            newParent = $(newParent); // Allow passing in either a JQuery object or selector
            var oldOffset = $element.offset();
            $(this).appendTo(newParent);
            var newOffset = $element.offset();


            var temp = $element.clone().appendTo('body');

            temp.css({
                'position': 'absolute',
                'left': oldOffset.left,
                'top': oldOffset.top,
                'zIndex': 1000
            });

            $element.hide();

            temp.animate({
                'top': newOffset.top,
                'left': newOffset.left
            }, duration, function() {
                $element.show();
                temp.remove();
            });

            //console.log("parentTo Animate done");
        }
    }
});

refreshSortableInventoryList();
function refreshSortableInventoryList() {
    $('.cell').sortable({
        connectWith: '.cell',
        placeholder: 'glyphicon-sortable-placeholder',
        receive: function (event, ui) {
            $(this).children().not(ui.item).parentToAnimate($(ui.sender), 200);
        },
        start: function () {
            left.onmouseover = pagingLeft;
            right.onmouseover = pagingRight;
        },
        beforeStop: function () {
            left.onmouseover = null;
            right.onmouseover = null;
        }
    }).each(function() { }).disableSelection();
}

function pagingLeft() {
        $('#carousel').carousel('prev');
}
function pagingRight() {
        $('#carousel').carousel('next');
}