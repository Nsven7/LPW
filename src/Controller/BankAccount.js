class BankAccount {
    TAUXINTERET = 0.03;
    #solde
    #historiqueOperations

    constructor(solde, historiqueOperations = []) {
        this.#solde = solde;
        this.#historiqueOperations = historiqueOperations;
    }

    /**
    * Get the solde of the client.
    * @return {number} The solde of the client.
    */
    get solde() {
        return this.#solde;
    }

    /**
     * Set the solde of the client.
     * @param {solde} solde - The new solde of the client.
     */
    set solde(solde) {
        this.#solde = solde;
    }

    /**
    * Get the historiqueOperations of the client.
    * @return {array} The historiqueOperations of the client.
    */
    get historiqueOperations() {
        return this.#historiqueOperations;
    }

    /**
     * Set the historiqueOperations of the client.
     * @param {array} historiqueOperations - The new historiqueOperations of the client.
     */
    set historiqueOperations(historiqueOperations) {
        this.#historiqueOperations = historiqueOperations;
    }

    /**
         * Validate the depot of the client.
         * @param {number} depot - The depot to validate.
         * @return {number} The validated depot.
         * @throws Will throw an error if the depot is not a non-empty string with a maximum size of 20 characters.
         */
    #validateDepot(depot) {
        if (depot <= 0 || typeof depot !== 'number') {
            throw new Error("The amount must be a float or number");
        } else {
            return depot;
        }
    }

    /**
         * Validate the depot of the client.
         * @param {number} depot - The depot to validate.
         * @return {number} The validated depot.
         * @throws Will throw an error if the depot is not a non-empty string with a maximum size of 20 characters.
         */
    #removeDepot(depot, solde) {
        if (depot > this.#solde || depot <= 0 || typeof depot !== 'number') {
            throw new Error("The amount can't be superior to your solde");
        } else {
            return depot;
        }
    }

    addDepot(depot) {
        this.#solde += this.#validateDepot(depot);
        this.#historiqueOperations.push(`Vous avez déposé : ${depot} €.`);
    }

    removeDepot(retrait) {
        this.#solde -= this.#removeDepot(retrait);
        this.#historiqueOperations.push(`Vous avez retiré ${retrait}€.`);
        this.#historiqueOperations.push(`Nouveau solde : ${this.#solde}€.`);
    }

    calculAmount() {
        this.#solde += this.#solde * this.TAUXINTERET;
        this.#historiqueOperations.push(`Intérêts annuels de 3% ajoutés.`);
        this.#historiqueOperations.push(`Nouveau solde : ${this.#solde}€.`);
    }
}

export { BankAccount }