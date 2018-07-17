function loopTriangle () {
    let x = '#'
    for(let i = 0; i < 7; i++) {
        console.log(x);
        x = x + "#";
    }
}

loopTriangle();


/// Solution

function loopTriangle2 () {
    for(let x = '*'; x.length < 8; x += '*') 
    console.log(x);
}

loopTriangle2();

