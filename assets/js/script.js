const TAUXINTERET = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 800;
let historiqueOperations = [];

function addDepot(solde, depot) {
    solde += depot;
    historiqueOperations.push(`Vous avez déposé : ${depot} euros`);
    console.log(`Vous avez déposé : ${depot} euros`);
    console.log(`Nouveau solde : ${solde}`);
    console.log(historiqueOperations);
}

function removeDepot(solde, retrait) {
    if (solde >= retrait) {
        solde -= retrait;
        historiqueOperations.push(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde}`);
        console.log(`Vous avez retiré : ${retrait} euros`);
        console.log(`Nouveau solde : ${solde}`);
        console.log(historiqueOperations);
    } else {
        console.log("Solde insuffisant pour effectuer ce retrait.");
    }
}

function calculAmount(solde, TAUXINTERET) {
    solde += solde * TAUXINTERET;
    historiqueOperations.push(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde}`);
    console.log((`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde}`));
    console.log(historiqueOperations);
}

addDepot(solde, depot);
removeDepot(solde, retrait);
calculAmount(solde, TAUXINTERET);