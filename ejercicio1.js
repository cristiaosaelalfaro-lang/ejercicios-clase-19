const readline = require ("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout

}) ;

rl.question( "por favor ingrese un numero entero y ademas que este sea positivo:",(numero) =>{
    let suma = 0;

    for (let i = 1 ; i <= numero ; i++) {
        suma = suma + i ;
    }

    console.log("la suma es de " + suma);

    rl.close();
})