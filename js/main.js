document.write('<table>');
for (var i = 1; i < 9; i++) {
    document.write('<tr>');
    for (var j = 1; j < 9; j++) {
        if (i%2 == j%2) {
            var class="white";
        } else {
            var class="black";
        } 
        document.write('td class="' + class + '"></td>');
    }
    document.write('</tr>');
}
document.write('</table>');
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
