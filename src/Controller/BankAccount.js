class BankAccount {
    static TAUXINTERET = 0.03;

    constructor(initialBalance) {
        this.solde = initialBalance;
        this.historiqueOperations = [];
    }

    addDepot(depot) {
        this.solde += depot;
        this.historiqueOperations.push(`Vous avez déposé : ${depot} euros`);
        console.log(`Vous avez déposé : ${depot} euros`);
        console.log(`Nouveau solde : ${this.solde}`);
        console.log(this.historiqueOperations);
    }

    removeDepot(retrait) {
        if (this.solde >= retrait) {
            this.solde -= retrait;
            this.historiqueOperations.push(`Vous avez retiré ${retrait} euros. Nouveau solde : ${this.solde}`);
            console.log(`Vous avez retiré : ${retrait} euros`);
            console.log(`Nouveau solde : ${this.solde}`);
            console.log(this.historiqueOperations);
        } else {
            console.log("Solde insuffisant pour effectuer ce retrait.");
        }
    }

    calculAmount() {
        this.solde += this.solde * BankAccount.TAUXINTERET;
        this.historiqueOperations.push(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${this.solde}`);
        console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${this.solde}`);
        console.log(this.historiqueOperations);
    }
}

export { BankAccount }