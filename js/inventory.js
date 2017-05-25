"use strict";
// анимация на отмену переноса

document.addEventListener("DOMContentLoaded", function () {
    var collection = document.querySelectorAll(".cell");

    collection.forEach(function (item, i, arr) {
        Sortable.create(item, {
            group: {
                name: "inventory",
                pull: true,
                put: true
            },
            sort: false,
            revertClone: true,
            animation: 150,
            dragClass: "sortable-drag",


            onAdd: function (evt) {
             var itemEl = evt.item;  // dragged HTMLElement

             if (itemEl.parentNode.childNodes.length > 1)
             {
                 evt.from.appendChild(itemEl);

                 return false;
             }
            }
        })
    })
});



function addList(container) {
    for (var i = 0; i < 4; i++) {
        var row = document.createElement('div');
        row.className = 'row';

        // первые 4 штуки, видимые и для тела, и для компа
        for (var j = 0; j < 4; j++) {
            var el = document.createElement('div');
            el.className = 'col-md-4 col-sm-5 cell';

            row.appendChild(el);
        }

        // последняя, для компа
        var lastEl = document.createElement('div');
        lastEl.className = 'col-md-4 hidden-sm cell';
        container.appendChild(row);
    }

    // последний ряд, для телефона видимый
    row = document.createElement('div');
    row.className = 'row';
    for (var k = 0; k < 4; k++) {
        el = document.createElement('div');
        el.className = 'hidden-md hidden-lg col-sm-5 cell';

        row.appendChild(el);
    }

    container.appendChild(row);
}
function removeList(container) {
    container.parentNode.removeChild(container);
}