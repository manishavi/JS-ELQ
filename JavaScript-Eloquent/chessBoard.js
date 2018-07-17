function stringBoard() {
    let ch = '';
    let x = 8;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if ((i+j)%2 === 0){
                ch += " ";
            } else {
                ch += "#";
            }
        }
        ch += `\n`;
    }
    console.log(ch);
}

stringBoard();

// solution

function stringBoard2() {
    var size = 8;

    var board = "";

    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if ((x + y) % 2 == 0)
            board += " ";
            else
            board += "#";
        }
        board += "\n";
    }

    console.log(board);
}

stringBoard2();