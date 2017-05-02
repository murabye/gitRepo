require(
    ['dragula'],
    function () {
        dragula(document.getElementsByClassName('cell'), {revertOnSplit: true});
    }
);