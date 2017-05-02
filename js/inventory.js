const lists = document.querySelectorAll(".cell");

for (var i = 0; i < lists.length; i++) {
    new MyDragZone(lists[i]);
    new MyDropTarget(lists[i]);
}