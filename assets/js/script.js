/* 
Créez une constante appelée tauxInteret avec la valeur 0.03 (3% d’intérêt annuel).
Créez une variable appelée solde avec une valeur initiale de 1000 (solde initial en euros).
Créez une variable appelée depot avec la valeur 200 (montant à déposer sur le compte).
Créez une variable appelée retrait avec la valeur 150 (montant à retirer du compte).
*/
TAUXINTERET = 0.03;
solde = 1000;
depot = 200;
retrait = 150;
nouveauDepot = 500
nouveauRetrait = 800
historiqueOperations = [];
i = 0;

/*
Ajoutez le montant de depot au solde.
Utilisez console.log() pour afficher le message : “Vous avez déposé 200 euros.
Nouveau solde : X euros.” où X est le nouveau solde après dépôt.
*/
historiqueOperations[i++] = "Vouz avez déposé 200 euros";
console.log("Vouz avez déposé 200 euros")
console.log(`Nouveau solde : ${solde + depot}`);

/*
Vérifiez si le solde est suffisant pour permettre le retrait
Si le solde est suffisant, soustrayez le montant de retrait du solde, puis affichez : “Vous avez retiré 150 euros. Nouveau solde : X euros.”
Si le solde est insuffisant, affichez un message dans la console : “Solde insuffisant pour effectuer ce retrait.”
*/
if (solde >= retrait) {
    solde = solde -= retrait;
    historiqueOperations[i++] = "Vouz avez retiré 150 euros";
    console.log(`Vouz avez retiré 150 euros. Nouveau solde : ${solde}`);
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.");
}

/*
Multipliez le solde actuel par le tauxInteret et ajoutez le résultat au solde.
Utilisez console.log() pour afficher le message : “Intérêts annuels de 3% ajoutés.Nouveau solde : X euros.”
*/
solde += solde * TAUXINTERET;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros`);

/*
Créez une nouvelle variable appelée nouveauDepot avec une valeur de 500.
Ajoutez ce montant au solde et affichez un message similaire à celui utilisé pour lepremier dépôt.
Créez une variable appelée nouveauRetrait avec une valeur de 800.
Effectuez un retrait en vérifiant que le solde est suffisant et affichez un message comme pour le premier retrait.
Enfin, recalculer les intérêts avec ce nouveau solde et affichez le résultat dans la console.
*/
historiqueOperations[i++] = "Vouz avez déposé 500 euros";
console.log("Vouz avez déposé 500 euros")
console.log(`Nouveau solde : ${solde + nouveauDepot}`);

if (solde >= nouveauRetrait) {
    historiqueOperations[i++] = "Vouz avez retiré 800 euros";
    solde = solde -= nouveauRetrait;
    console.log(`Vouz avez retiré 800 euros. Nouveau solde : ${solde}`);
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.");
}

solde += solde * TAUXINTERET;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros`);

console.log(historiqueOperations);