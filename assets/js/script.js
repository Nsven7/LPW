const TAUXINTERET = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
let i = 0;
let historiqueOperations = [];

function calculAmount(solde, depot, retrait, TAUXINTERET) {
    if (depot !== null && depot !== undefined) {
        solde += depot;
        let interest = solde * TAUXINTERET;
        historiqueOperations[i++] = `Vous avez déposé : ${depot} euros`;
        console.log(`Vous avez déposé : ${depot} euros`);
        console.log(`Intérêts annuels de ${TAUXINTERET}% ajoutés. Montant : ${interest} euros`);
        console.log(`Nouveau solde : ${solde}`);
    } else {
        if (solde >= retrait) {
            solde = solde !== 1000 ? 1000 : solde;
            solde -= retrait;
            historiqueOperations[i++] = `Vous avez retiré ${retrait} euros`;
            console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde}`);
        } else {
            console.log("Solde insuffisant pour effectuer ce retrait.");
        }
    }
    return solde;
}

// // Test Cases:
console.log("Test 1 - Dépôt:");
console.log(calculAmount(solde, depot, null, TAUXINTERET));

console.log("\nTest 2 - Retrait:");
console.log(calculAmount(solde, null, retrait, TAUXINTERET));