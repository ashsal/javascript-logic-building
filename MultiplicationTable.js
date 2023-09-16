function printMultiplicationTable(tableOf, tableTill) {
    console.log(tableOf, tableTill);

    for(let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${i * tableOf}`);
    }
}

function printMultiplicationTable2(tableOf, tableTill) {

    for(let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
        console.log(i);
    }

}
printMultiplicationTable(4, 10);
printMultiplicationTable(8, 20);

console.log("printMultiplicationTable2");
printMultiplicationTable2(4, 10);
printMultiplicationTable2(8, 20);