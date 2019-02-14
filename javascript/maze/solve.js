// Solve a maze

(function() {
    function solveMaze(grid) {
        return grid.map(function(r, i) {
            return { row: 0, col: i };
        });
    }

    window.MAZE = window.MAZE || {};
    window.MAZE.solve = solveMaze;
})();

