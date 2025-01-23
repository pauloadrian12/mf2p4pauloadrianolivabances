const op = require("operaciones");
const prompt = require("prompt-sync")({ sigint: true });

/**
 * Aquest procediment mostra un menu per pantalla y demana a l'usuari que
 * esculli una opcio
 * 
 * @returns {string} la opcio entrada per l'usuari
 */
function preguntarOperacio() {
    console.log("Calculadora");
    console.log("1. suma");
    console.log("2. multiplica");
    console.log("0. sortir");

    return prompt("Opció: ");
}

/**
 * Aquesta funció pregunta a l'usuari quants números vol entrar y
 * demana que els entri, finalment retorna un array amb tots aquests valors
 * 
 * @returns {Array<number>} un array de valors
 */
function demanaValors() {
    let n_valors = +prompt("Quants valors vols entrar (entra un número positiu)? ");

    let valors = Array(n_valors).fill(null);

    for (let i = 0; i < n_valors; i++) {
        valors[i] = +prompt("Entra un número: ");
    }

    return valors;
}

/**
 * Procediment principal
 */
function main() {
    const OPERACIONS = [
        op.suma,
        op.multiplica,
    ];

    let operacio;
    do {
        operacio = preguntarOperacio();

        switch (operacio) {
            case "1":
            case "2":
                valors = demanaValors();
                console.log("El resultat de la operació és: " + OPERACIONS[+operacio - 1](...valors));
        }

    } while (operacio !== "0");
}


main();