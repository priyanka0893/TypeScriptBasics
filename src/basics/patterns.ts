let rows : number = 5;
for (let i: number = 1; i <= rows; i++) {
    let pattern: string = "";   
    for (let j: number = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

let n: number = 5;

for (let i = 0; i < n; i++) {
    let row: string = "";

    for (let j = 0; j < n; j++) {

        if (
            (i === 0 || i === 4) && (j === 0 || j === 4) ||   
            (i === 1 || i === 3) && (j === 1 || j === 3) ||   
            (i === 2) && (j === 0 || j === 2 || j === 4)      
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}