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
    'three': 'span class="">&9821;</span>',
    'four': 'span class="">&98819;</span>',
    'five': 'span class="">&9818;</span>',
    'six': 'span class="">&9821;</span>',
    'seven': 'span class="">&9822;</span>',
    'eight': 'span class="">&9820;</span>',
};

board.b = {
    'one': '&#9823;',
    'two': '&#9823;',
    'three': '&#9823;',
    'four': '&#9823;',
    'five': '&#9823;',
    'six': '&#9823;',
    'seven': '&#9823;',
    'eight': '&#9823;'
   
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
    'one': '&#9817;',
    'two': '&#9817;',
    'three': '&#9817;',
    'four': '&#9817;',
    'five': '&#9817;',
    'six': '&#9817;',
    'seven': '&#9817;',
    'eight': '&#9817;'  
    
};

board.h = {
    'one': '<span class="">&9814;</span>',
    'two': '<span class="">&9816;</span>',
    'three': 'span class="">&9815;</span>',
    'four': 'span class="">&98813;</span>',
    'five': 'span class="">&9812;</span>',
    'six': 'span class="">&9815;</span>',
    'seven': 'span class="">&9816;</span>',
    'eight': 'span class="">&9814;</span>',

};

print(board);




