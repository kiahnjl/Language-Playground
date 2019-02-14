// main

(function() {
    function main() {
        let element = document.getElementById('maze');
        let board = MAZE.generate(10);
        MAZE.render(element, board);
        MAZE.walkPath(element, MAZE.solve(board));
    }
    
    window.addEventListener('DOMContentLoaded', main);
})();