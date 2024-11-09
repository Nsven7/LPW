const TAUXINTERET = 0.03;
let solde = 1000;
let amount = Number(prompt("Veuillez introduire votre montant").replace(/\D/g, ""));
let answer = prompt("S'agit-il d'un dépôt ? (tapez \"oui\" ou \"non\") ").trim();
let historiqueOperations = [];

while (!amount) {
    alert("Veuillez introduire un montant valide");
    amount = Number(prompt("Veuillez introduire votre montant").replace(/\D/g, ""));
}

while (answer !== "oui" && answer !== "non") {
    alert("Veuillez introduire une réponse valide");
    answer = prompt("S'agit-il d'un dépôt ? (tapez \"oui\" ou \"non\") ").trim();
}

function calculAmount(solde, amount, TAUXINTERET) {
    if (answer === "oui") {
        solde += amount;
        let interest = solde * TAUXINTERET;
        solde += interest;
        historiqueOperations.push(`Vous avez déposé : ${amount} euros`);
        console.log(`Vous avez déposé : ${amount} euros`);
        console.log(`Intérêts annuels de ${TAUXINTERET}% ajoutés. Montant : ${interest} euros`);
        console.log(`Nouveau solde : ${solde}`);
    } else {
        if (solde >= amount) {
            solde = solde !== 1000 ? 1000 : solde;
            solde -= amount;
            let interest = solde * TAUXINTERET;
            solde += interest;
            historiqueOperations.push(`Vous avez retiré ${amount} euros`);
            console.log(`Intérêts annuels de ${TAUXINTERET}% ajoutés. Montant : ${interest} euros`);
            console.log(`Vous avez retiré ${amount} euros. Nouveau solde : ${solde}`);
        } else {
            console.log("Solde insuffisant pour effectuer ce retrait.");
        }
    }
    console.log(historiqueOperations);
    return solde;
}

console.log(calculAmount(solde, amount, TAUXINTERET));