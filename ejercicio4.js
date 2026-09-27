const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de productos elaborados por día: ", (productosDiarios) => {

    let produccionTotal = 0;

    for (let dia = 1; dia <= 7; dia++) {
        produccionTotal = produccionTotal + Number(productosDiarios);
    }

    console.log("Producción total de la semana: " + produccionTotal);

    rl.close();
});