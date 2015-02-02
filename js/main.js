// Loop for the Grid

function print(board) {
    document.write('<table>');
    
    _.forEach(board, function (row, key){
        document.write("<tr>");
        _.forEach(row, function(square, k){
                  document.write("<td>" + square "<td>")
                  
        });
        document.write("</tr>");
    });
   document.write('</table>');
}

// dictionary of the chess pieces


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

// functions for moving the pieces -- ??how they tie with buttons??
var whatMoveAreWeOn = 0;

function movePiece(){
    
    if (whatMove == 0) {
        var lContent = document.getElementById('a2').innerHTML;
        document.getElementById('a2').innerHTML ="";
        document.getElementById('c3').innerHTML = lContent;
        whatMove++;
    } else if (whatMove == 1) {
        var lContent = document.getElementById('g8').innerHTML;
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = lContent;
        whatMove++;
    } else if (whatMove == 2) {
        var lContent = document.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = lContent;
        whatMove++;
    
    } else if (whatMove == 3) {
        var lContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = lContent;
        whatMove++;

    }
}

function movePieceBack(){

    if(whatMove == 0) {
        //do nothing
    
    } else if (whatMove == 1) {
        var lContent = document.getElementById('c3').innerHTML;
        document.getElementById('c3').innerHTML = "";
        document.getElementById('a2').innerHTML = lContent;
        whatMove--;
    }  else if (whatMove == 2) {
        var lContent = document.getElementById('f8').innerHTML;
        document.getElementById('f8').innerHTML = "";
        document.getElementById('g8').innerHTML = lContent;
        whatMove--;
    }  else if (whatMove == 3) {
        var lContent = document.getElementById('c7').innerHTML;
        document.getElementById('c7').innerHTML = "";
        document.getElementById('b7').innerHTML = lContent;
        whatMove--;
    }  else if (whatMove == 1) {
        var lContent = document.getElementById('f4').innerHTML;
        document.getElementById('f4').innerHTML = "";
        document.getElementById('h2').innerHTML = lContent;
        whatMove--;
    }

}

function fastForward() {
    if (whatMove == 4) {
    } else {
        whatMove = 4;
        var lContent = document.getElementby('a2').innerHTML;
        document.getElementById('a2').innerHTML = "";
        document.getElementById('c3').innerHTML = "";
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = mcontent;
    var nContent = docuent.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = nContent;
    var oContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = oContent;
    }
}

function rewind() {
    if(whatMove = 0) {
    } else {
    whatMove = 0;
    var lcontent = document.getElementById('c3').innerHTML;
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
// Basic Buttons

    document.write('<div class="button-group">');
    document.write('<i class="fa fa-angle-double-left fa-lg"></i>');
    document.write('<i class="fa fa-angle-left fa-lg"></i>');
    document.write('<i class="fa fa-angle-right fa-lg"></i>');
    document.write('<i class="fa fa-angle-double-right fa-lg"></i>');
    document.write('</div>');


