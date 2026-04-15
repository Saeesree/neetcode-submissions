class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let rows = 0; rows<9; rows++){
            let set = new Set();
            for(let i = 0; i<9; i++){
                if(board[rows][i] === '.') continue;
                if(set.has(board[rows][i])){
                    return false
                }
                set.add(board[rows][i]);
            }
        }

        for(let cols = 0; cols<9; cols++){
            let set = new Set();
            for(let i=0; i<9; i++){
                if(board[i][cols] === '.') continue;
                if(set.has(board[i][cols])){
                    return false
                }
                set.add(board[i][cols]);
            }
        }

        for(let square = 0; square<9; square++){
            let set = new Set();
            for(let i =0; i<3; i++){
                for(let j=0; j<3; j++){
                    let row = Math.floor(square/3)*3 + i;
                    let col = (square%3)*3 + j;
                    if(board[row][col] === '.') continue;
                    if(set.has(board[row][col])){
                        return false
                    }
                    set.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
