/*

*/


function start(e) {
    var name = [
        {
            char: '林',
            big5: 'AA4C',
            cns:  '1-4E2F',
            unicode: '6797'
        },
        {
            char: '耘',
            big5: 'AFD0',
            cns:  '1-5754',
            unicode: '8018'
        },
        {
            char: '辰',
            big5: 'A8B0',
            cns:  '1-4B51',
            unicode: '8FB0'
        },
    ];
    var ele = document.getElementById("div1")

    for (var i = 0; i < 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
