const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el gasto diario de transporte: ", (gastoDiario) => {

    let gastoTotal = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoTotal = gastoTotal + Number(gastoDiario);

        console.log("Día " + dia + ": $" + gastoTotal.toFixed(2));
    }

    console.log("Gasto total: $" + gastoTotal.toFixed(2));

    rl.close();
});