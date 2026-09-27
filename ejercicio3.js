const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de entradas vendidas diariamente: ", (entradasDiarias) => {

    let totalEntradas = 0;

    for (let dia = 1; dia <= 5; dia++) {
        totalEntradas = totalEntradas + Number(entradasDiarias);
    }

    console.log("Total de entradas vendidas: " + totalEntradas);

    rl.close();
});