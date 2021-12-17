class BankAccount {
  constructor() {
    this.statusAccount = false;
    this.balanceAccount = 0;
  }

  statusAccountActive(message) {
    if (!this.statusAccount) {
      throw new ValueError(message);
    }
  }

  open() {
    if (!this.statusAccount) this.statusAccount = true;
    else throw new ValueError('Your account is already open.');
  }

  close() {
    this.statusAccountActive('Your account is already close or not exist.');
    this.statusAccount = false;
    this.balanceAccount = 0;
  }

  deposit(value) {
    this.statusAccountActive('Your account is close or not exist.');
    if (value < 0) throw new ValueError('Invalid value');
    this.balanceAccount += value;
  }

  withdraw(value) {
    this.statusAccountActive('Your account is close or not exist.');
    if (value < 0) throw new ValueError('Invalid value');
    if (value <= this.balanceAccount) this.balanceAccount -= value;
    else throw new ValueError('Insufficient funds');
  }

  get balance() {
    this.statusAccountActive('Your account is close or not exist.');
    return this.balanceAccount;
  }
}

class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Action not allowed';
  }
}
