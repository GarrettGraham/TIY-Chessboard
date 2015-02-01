// Below is the Loop for the Grid



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
