// Render a maze

(function() {
    function renderMaze(element, maze) {
        element.classList.add('maze');
        element.innerHTML = maze.reduce(function(rows, row) {
            let cells = row.reduce(function(cells, cell) {
                let className = cell ? 'cell-path' : 'cell-wall';
                return cells + '<div class="cell ' + className + '"></div>';
            }, '');
            
            return rows + '<div class="row">' + cells + '</div>';
        }, '');
    }

    function walkPath(element, path) {
        if(path.length === 0) {
            return;
        }

        let step = path.pop();
        let row = element.childNodes[step.row];
        let cell = row.childNodes[step.col];

        cell.classList.add('cell-active');

        setTimeout(function() {
            cell.classList.remove('cell-active');
            walkPath(element, path);
        }, 1000);
    }

    window.MAZE = window.MAZE || {};
    window.MAZE.render = renderMaze;
    window.MAZE.walkPath = walkPath;
})();

