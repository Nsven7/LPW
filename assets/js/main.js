import { BankAccount } from '../../src/Controller/BankAccount.js';

let firstSolde = 1000
let account = new BankAccount(firstSolde)

document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault()

    const number = parseInt(document.getElementById('number').value)
    const operation = document.querySelector('input[name="operation"]:checked').value

    if(operation == "add") {
        account.addDepot(number);
    } else {
        account.removeDepot(number);
    }
    
    account.calculAmount()

    for (let key in account.historiqueOperations) {
        const operationElement = document.createElement('div');
        operationElement.textContent = account.historiqueOperations[key];
        document.getElementById('numberForm').appendChild(operationElement);
    }
})