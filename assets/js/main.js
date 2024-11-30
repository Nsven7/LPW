import { BankAccount } from '../../src/Controller/BankAccount.js';

let account = new BankAccount(1000);
account.addDepot(200);
account.removeDepot(800);
account.calculAmount();