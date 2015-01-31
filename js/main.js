<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
var piece = function(type, color, x, y) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.assignCell = function(x, y) {
        board[x][y] = this;
    };
};

var generatePieces = function() {
    // have 8 * 8 loop make all 32 pieces
    
    // rooks
    pieces.push(new piece('rook', 'white', 0, 0));
    pieces.push(new piece('rook', 'white', 7, 0));
    pieces.push(new piece('rook', 'black', 0, 7));
    pieces.push(new piece('rook', 'black', 7, 7));
    
    // knights
    pieces.push(new piece('knight', 'white', 1, 0));
    pieces.push(new piece('knight', 'white', 6, 0));
    pieces.push(new piece('knight', 'black', 7, 6));
    pieces.push(new piece('knight', 'black', 7, 1));

    // bishops
    pieces.push(new piece('bishop', 'white', 0, 0));
    pieces.push(new piece('bishop', 'white', 7, 0));
    pieces.push(new piece('bishop', 'black', 0, 7));
    pieces.push(new piece('bishop', 'black', 7, 7));

    // queens
    pieces.push(new piece('queen', 'white', 3, 0));
    pieces.push(new piece('queen', 'black', 3, 7));

    // kings
    pieces.push(new piece('king', 'white', 4, 0));
    pieces.push(new piece('king', 'black', 4, 7));

    // pawns
    pieces.push(new piece('pawn', 'white', 0, 1));
    pieces.push(new piece('pawn', 'white', 1, 1));
    pieces.push(new piece('pawn', 'white', 2, 1));
    pieces.push(new piece('pawn', 'white', 3, 1));
    pieces.push(new piece('pawn', 'white', 4, 1));
    pieces.push(new piece('pawn', 'white', 5, 1));
    pieces.push(new piece('pawn', 'white', 6, 1));
    pieces.push(new piece('pawn', 'white', 7, 1));
    pieces.push(new piece('pawn', 'black', 0, 6));
    pieces.push(new piece('pawn', 'black', 1, 6));
    pieces.push(new piece('pawn', 'black', 2, 6));
    pieces.push(new piece('pawn', 'black', 3, 6));
    pieces.push(new piece('pawn', 'black', 4, 6));
    pieces.push(new piece('pawn', 'black', 5, 6));
    pieces.push(new piece('pawn', 'black', 6, 6));
    pieces.push(new piece('pawn', 'black', 7, 6));

};

var renderPieces = function() {
    // traverse entire board and make sure each piece is on the right cell
    switch(peice.type) {
        case "rook" : 
            // render a rook
            // make sure to assign a class of .rook-white
            break;
    }
};








//      var table = document.body.children[0],
//          thead = document.body.children[0].children[0],
//          tbody = document.body.children[0].children[1];
//
//      console.assert(table.tagName == 'TABLE');
//      console.assert(thead.tagName == 'THEAD');
//      console.assert(tbody.tagName == 'TBODY');
//
//      var chessboard = document.getElementById('chessboard-kinda');
//
//      console.assert(chessboard === table);
//      // Shouldn't these be the same?
//
//      // Getting all the rows...
//      //
//      var rows = document.getElementsByTagName('tr');
//      // All the `<tr>` tags...
//
//      console.assert(rows.length === 2);
//      // 1 `<tr>` in `<thead>` + 1 `<tr>` in `<tbody>`
//
//      // Getting the row that is a child of `<tbody>`...
//      var bodyRow = _.find(rows, { 'parentElement': tbody });
//
//      console.assert(bodyRow === tbody.firstChild);
//      // Those should be the same, too, right?
//
//      // Getting some elements via `getElementByClassName`
//      var cells = document.getElementsByClassName('piece');
//
//      console.assert(cells.length === 9);
//      // 1 `<td>` in `<thead>` + 8 `<tr>` in `<tbody>`
//
//      // Getting the `<td>`'s that are children of `<tbody>`
//      var pieces = _.filter(cells, { 'parentElement': bodyRow });
//
//      console.assert(pieces.length === 8);
=======
//document.write('<table>');
//for (var i = 1; i < 9; i++) {
//    document.write('<tr>');
//    for (var j = 1; j < 9; j++) {
//        if (i%2 == j%2) {
//            var class="white";
//        } else {
//            var class="black";
//        } 
//        document.write('td class="' + class + '"></td>');
//    }
//    document.write('</tr>');
//}
//document.write('</table>');

//var board = [
//   
//    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ];
//
//
//








var board = [];

function print(board){
    document.write('<table>');
    
    var cell = "<td></td>";
    var row = "<tr></tr>";
    
    _.times(8, function(){
        
        var row = [];
        
        board.push(row);

        document.write("<tr>");
        _.times(8, function(){

            row.push(cell);
            
            document.write(cell);
        });
        document.write("</tr>");
    });
    
    
    document.write('</table>');
}

print();

//
//
//console.log(board.join('\n') + '\n\n');
//
//var printBoard = function() {
//    console.log(board.join('\n'));
//}
//
//function move (fromX, fromY, toX, toY){
//    board[4][4] = board[6][4];
//    board[6][4] = ' ';
//    printBoard();
// 
//};

//var ranks = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var files = [  , a,  b, c, d, e, f, g, h,  ];
//
//for (x = 0; x <=10; x++) {
//     printBoard();            
//    }





// Move King's Pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));

// Move Queens Pawn forward 2
//board[4][3] = board [6][3];
//board[6][3] = ' ';
//console.log(board.join('\n'));



>>>>>>> feature/get-chess-grid
>>>>>>> 3742cdf2ae26fd7774bafdd984039a51c1d0a94b
=======

>>>>>>> feature/03--CSS-Chess-Pieces
