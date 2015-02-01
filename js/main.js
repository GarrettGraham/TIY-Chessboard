// Loop for the Grid

function print(board) {
    document.write('<table>');
    
    _.forEach(board, function (row, key){
        document.write("<tr>");
        _.forEach(row, function(square, k){
                  document.write("<td>" + square "<td>")
                  
        });
        document.write("<tr>");
    });
    document.write('<table>');
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




