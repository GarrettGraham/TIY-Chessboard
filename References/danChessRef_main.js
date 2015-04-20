// rows and files identifier?????

function print(){
    
    var rowIdentifier = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function print(board){
    document.write('<table>');
    
    _.forEach(board, function(row, key){
        document.write("<tr>");
        _.forEach(row, function(square, k){
            document.write("<td>" + square + "</td>")
   
        });
        document.write("</tr>");
    });
    
    document.write('</table>');
    
}
 
var board = {};

board.a = {
    'one': '<span class="">&9820;</span>',
    'two': '<span class="">&9822;</span>',
    'three': '<span class="">&9821;</span>',
    'four': '<span class="">&98819;</span>',
    'five': '<span class="">&9818;</span>',
    'six': '<span class="">&9821;</span>',
    'seven': '<span class="">&9822;</span>',
    'eight': '<span class="">&9820;</span>',
};

board.b = {
    'one': '<span class="">&#9823;</span>',
    'two': '<span class="">&#9823;</span>',
    'three': '<span class="">&#9823;</span>',
    'four': '<span class="">&#9823;</span>',
    'five': '<span class="">&#9823;</span>',
    'six': '<span class="">&#9823;</span>',
    'seven': '<span class="">&#9823;</span>',
    'eight': '<span class="">&#9823;</span>'
   
};

board.c = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};

board.d = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};

board.e = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};

board.f = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};

board.g = {
    'one': '<span class="">&#9817;</span>',
    'two': '<span class="">&#9817;</span>',
    'three': '<span class="">&#9817;</span>',
    'four': '<span class="">&#9817;</span>',
    'five': '<span class="">&#9817;</span>',
    'six': '<span class="">&#9817;</span>',
    'seven': '<span class="">&#9817;</span>',
    'eight': '<span class="">&#9817;</span>'  
    
};

board.h = {
    'one': '<span class="">&9814;</span>',
    'two': '<span class="">&9816;</span>',
    'three': '<span class="">&9815;</span>',
    'four': '<span class="">&98813;</span>',
    'five': '<span class="">&9812;</span>',
    'six': '<span class="">&9815;</span>',
    'seven': '<span class="">&9816;</span>',
    'eight': '<span class="">&9814;</span>',

};

print(board);


//board.c.three = board.a.one;
//board.a.one = '';

var whatMoveAreWeOn = 0;

function movePiece(){
    
    if (whatMoveAreWeOn == 0){
        var lContent = document.getElementById('a2').innerHTML;
        document.getElementById('a2').innerHTML = "";
        document.getElementById('c3').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 1){
        var lContent = document.getElementById('g8').innerHTML;
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 2){
        var lContent = document.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 3){
        var lContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = lContent;
        whatMoveAreWeOn++;
    }
}

function movePieceBack(){
    
    
    if (whatMoveAreWeOn == 0){
        //do nothing
    }else if (whatMoveAreWeOn == 1){
        var lContent = document.getElementById('c3').innerHTML;
        document.getElementById('c3').innerHTML = "";
        document.getElementById('a2').innerHTML = lContent;
        whatMoveAreWeOn--;
    }else if(whatMoveAreWeOn == 2){
        var lContent = document.getElementById('f8').innerHTML;
        document.getElementById('f8').innerHTML = "";
        document.getElementById('g8').innerHTML = lContent;
        whatMoveAreWeOn--;
    }else if(whatMoveAreWeOn == 3){
        var lContent = document.getElementById('c7').innerHTML;
        document.getElementById('c7').innerHTML = "";
        document.getElementById('b7').innerHTML = lContent;
        whatMoveAreWeOn--;
    }
    else if(whatMoveAreWeOn == 4){
        var lContent = document.getElementById('f4').innerHTML;
        document.getElementById('f4').innerHTML = "";
        document.getElementById('h2').innerHTML = lContent;
        whatMoveAreWeOn--;
    }
}

 
function fastForward(){
    if (whatMoveAreWeOn == 4) {
        
    } else {
    whatMoveAreWeOn = 4;
    var lContent = document.getElementById('a2').innerHTML;
        document.getElementById('a2').innerHTML = "";
        document.getElementById('c3').innerHTML = lContent;
    var mContent = document.getElementById('g8').innerHTML;
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = mContent;
    var nContent = document.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = nContent;
    var oContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = oContent;
    }
    
}

function rewind(){
    
    if(whatMoveAreWeOn == 0){
        
    } else { 
     whatMoveAreWeOn = 0;
     var lContent = document.getElementById('c3').innerHTML;
        document.getElementById('c3').innerHTML = "";
        document.getElementById('a2').innerHTML = lContent;
    var mContent = document.getElementById('f8').innerHTML;
        document.getElementById('f8').innerHTML = "";
        document.getElementById('g8').innerHTML = mContent;
    var nContent = document.getElementById('c7').innerHTML;
        document.getElementById('c7').innerHTML = "";
        document.getElementById('b7').innerHTML = nContent;
    var oContent = document.getElementById('f4').innerHTML;
        document.getElementById('f4').innerHTML = "";
        document.getElementById('h2').innerHTML = oContent;
    }
}
 


 // !!! Add more moves at least up to five moces if necessary !!!


//  function move(board){
//     board.c.three = board.a.one;
//     board.a.one = '';
//     print(board);
// }
//     console.log(move());

    document.write('<div class="button-group">');
    document.write('<i class="fa fa-angle-double-left fa-lg"></i>');
    document.write('<i class="fa fa-angle-left fa-lg"></i>');
    document.write('<i class="fa fa-angle-right fa-lg"></i>');
    document.write('<i class="fa fa-angle-double-right fa-lg"></i>');
    document.write('</div>');



// document.write ('<i class="fa fa-angle-double-left fa-lg"></i>');
// document.write ('<i class="fa fa-angle-double-left fa-lg"></i>');
// document.write ('<i class="fa fa-angle-double-right fa-lg"></i>');
// document.write ('<i class="fa fa-angle-double-right fa-lg"></i>');
// the above code is from maddie and is pretty much the board in its entirety
// the above code is essentially what we are going to turn in
// the bottom code is from dan and i dont plan to use it




var board = [];

// will house references to all pieces
var pieces = [];

// piece constructor. when used like new piece() it will 
// make a new instance of a piece
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

//board.c.two = board.b.one
//board.b.one = '';
//board.c.three = board.a.one;
//board.a.one = '';
 


 /*the blow code is from dan and i added the matrix. the above code is maddies with the piece rendering and then evan's loop for the grid*/

var generateBoard = function() {
    // have 8 * 8 make array "2-dimensional matrix"
    // during this phase you will simply make a large matrix full of board references
    // alternatively do
    peices[0].assignCell(0,0);
    
    board[0] = [];
    board[0][0] = peices[0];
};

var renderBoard = function() {
    // have 8 * 8 make array "2-dimensional matrix"
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']];
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







//the following is the loop for creating a board -from Evan

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

	
	
	<!--

	<table id="chessboard">
		<thead class="x-coordinate">
			<tr class="row">
				<td> </td>
				<th> A </th>
				<th> B </th>
				<th> C </th>
				<th> D </th>
				<th> E </th>
				<th> F </th>
				<th> G </th>
				<th> H </th>
			</tr>
		</thead>
		<tbody>
			<tr class="row">
				<th> 8 </th>
					<td class="pieceBlackRook">
					</td>
					<td class="pieceBlackKnight">
					</td>
					<td class="pieceBlackBishop">
					</td>
					<td class="pieceBlackQueen">
					</td>
					<td class="pieceBlackKing">
					</td>
					<td class="pieceBlackBishop">
					</td>
					<td class="pieceBlackKnight">
					</td>
					<td class="pieceBlackRook">
					</td>
				<th> 8 </th>			
			</tr>
			<tr class="row">
				<th> 7 </th>
					<td class="pieceBlackPawn">
					</td>
					<td class="pieceBlackPawn"></td>
					<td class="pieceBlackPawn"></td>
					<td class="pieceBlackPawn"></td>
					<td class="pieceBlackPawn"></td>
					<td class="pieceBlackPawn"></td>
					<td class="pieceBlackPawn"></td>									<td class="pieceBlackRook"></td>					
				<th> 7 </th>

			</tr>
			<tr class="row">
			<th> 6 </th>
				<td id="a3"></td>
				<td id="b3"></td>
				<td id="c3"></td>
				<td id="d3"></td>
				<td id="e3"></td>
				<td id="f3"></td>
				<td id="g3"></td>
				<td id="h3"></td>
			<th> 6 </th>

			</tr>
			<tr class="row">
			<th> 5 </th>
				<td id="a4"></td>
				<td id="b4"></td>
				<td id="c4"></td>
				<td id="d4"></td>
				<td id="e4"></td>
				<td id="f4"></td>
				<td id="g4"></td>
				<td id="h4"></td>
			<th> 5 </th>

			</tr>
			<tr class="row">
			<th> 4 </th>
				<td id="a5"></td>
				<td id="b5"></td>
				<td id="c5"></td>
				<td id="d5"></td>
				<td id="e5"></td>
				<td id="f5"></td>
				<td id="g5"></td>
				<td id="h5"></td>
			<th> 4 </th>

			</tr>
			<tr class="row">
			<th> 3 </th>
				<td id="a6"></td>
				<td id="b6"></td>
				<td id="c6"></td>
				<td id="d6"></td>
				<td id="e6"></td>
				<td id="f6"></td>
				<td id="g6"></td>
				<td id="h6"></td>
			<th> 3 </th>

			</tr>
			<tr class="row">
			<th> 2 </th>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<td><span>&#9817;</span></td>
				<th> 2 </th>
			</tr>
			<tr class="row">
			<th> 1 </th>
				<td><span>&#9814;</span></td>
				<td><span>&#9816;</span></td>
				<td><span>&#9815;</span></td>
				<td><span>&#9813;</span></td>
				<td><span>&#9812;</span></td>
				<td><span>&#9815;</span></td>
				<td><span>&#9816;</span></td>
				<td><span>&#9814;</span></td>
			<th> 1 </th>

			</tr>
			<tr class="row">
				<td> </td>
				<th> A </th>
				<th> B </th>
				<th> C </th>
				<th> D </th>
				<th> E </th>
				<th> F </th>
				<th> G </th>
				<th> H </th>
			</tr>
		</tbody>
	</table>
-->

	<!--
        <table id="chessboard">
	<thead class="x-coordinate">
		<tr class="row">
			<td> </td>
			<th> A </th>
			<th> B </th>
			<th> C </th>
			<th> D </th>
			<th> E </th>
			<th> F </th>
			<th> G </th>
			<th> H </th>
		</tr>
	</thead>
	<tbody>
		<tr class="row">
			<th> 8 </th>
			<td class="piece black rook"></td>
			<td class="piece black knight"></td>
			<td class="piece black bishop"></td>
			<td class="piece black queen"></td>
			<td class="piece black king"></td>
			<td class="piece black bishop"></td>
			<td class="piece black knight"></td>
			<td class="piece black rook"></td>
			<th> 8 </th>
		</tr>
		<tr class="row">
			<th> 7 </th>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<td class="piece black pawn"> </td>
			<th> 7 </th>
		</tr>
		<tr class="row">
			<th> 6 </th>
			<td id="a5"> </td>
			<td id="b5"> </td>
			<td id="c5"> </td>
			<td id="d5"> </td>
			<td id="e5"> </td>
			<td id="f5"> </td>
			<td id="g6"> </td>
			<td id="h6"> </td>
			<th> 6 </th>
		</tr>
		<tr class="row">
			<th> 5 </th>
			<td id="a5"> </td>
			<td id="b5"> </td>
			<td id="c5"> </td>
			<td id="d5"> </td>
			<td id="e5"> </td>
			<td id="f5"> </td>
			<td id="g5"> </td>
			<td id="h5"> </td>
			<th> 5 </th>
		</tr>
		<tr class="row">
			<th> 4 </th>
			<td id="a4"> </td>
			<td id="b4"> </td>
			<td id="c4"> </td>
			<td id="d4"> </td>
			<td id="e4"> </td>
			<td id="f4"> </td>
			<td id="g4"> </td>
			<td id="h4"> </td>
			<th> 4 </th>
		</tr>
		<tr class="row">
			<th> 3 </th>
			<td id="a3"> </td>
			<td id="b3"> </td>
			<td id="c3"> </td>
			<td id="d3"> </td>
			<td id="e3"> </td>
			<td id="f3"> </td>
			<td id="g3"> </td>
			<td id="h3"> </td>
			<th> 3 </th>
		</tr>
		<tr class="row">
			<th> 2 </th>
			<td class="piece black rook"></td>
			<td class="piece black knight"></td>
			<td class="piece black bishop"></td>
			<td class="piece black queen"></td>
			<td class="piece black king"></td>
			<td class="piece black bishop"></td>
			<td class="piece black knight"></td>
			<td class="piece black rook"></td>
			<th> 8 </th>
		</tr>
		<tr class="row">
			<th> 1 </th>
			<td class="piece black rook"></td>
			<td class="piece black knight"></td>
			<td class="piece black bishop"></td>
			<td class="piece black queen"></td>
			<td class="piece black king"></td>
			<td class="piece black bishop"></td>
			<td class="piece black knight"></td>
			<td class="piece black rook"></td>
			<th> 8 </th>
		</tr>
		<tr class="row">
			<td> </td>
			<th> A </th>
			<th> B </th>
			<th> C </th>
			<th> D </th>
			<th> E </th>
			<th> F </th>
			<th> G </th>
			<th> H </th>
		</tr>
	</tbody>
</table>
-->