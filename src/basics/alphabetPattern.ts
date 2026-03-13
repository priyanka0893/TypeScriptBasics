let n = 6;

for (let i = 1; i <= n; i++) {

    let row = "";

    // spaces
    for (let s = 1; s <= n - i; s++) {
        row += "   ";
    }

    // alphabets
    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j) + " ";
    }

    console.log(row);
}