// Gen a maze
// Input: size, the width/height of the board

(function() {
    function genMaze(size) {
        let board = new Array(size);

        for(let i = 0; i < size; i++) {
            board[i] = new Array(size);
            for(let j = 0; j < size; j++) {
                board[i][j] = Math.random() < 0.5;
            }
        }

        return board;
    }
    
    window.MAZE = window.MAZE || {};
    window.MAZE.generate = genMaze;
})();