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



