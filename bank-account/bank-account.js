export class BankAccount {
  #balance = null

  constructor() {}

  open() {
    if (this.#balance !== null) throw new ValueError()
    this.#balance = 0
  }

  close() {
    if (this.#balance === null) throw new ValueError()
    this.#balance = null
  }

  deposit(amount) {
    if (this.#balance === null) throw new ValueError()
    if (amount < 0) throw new ValueError()
    this.#balance = this.balance + amount
  }

  withdraw(amount) {
    if (this.#balance === null) throw new ValueError()
    if (amount < 0 || amount > this.balance) throw new ValueError()
    this.#balance = this.balance - amount
  }

  get balance() {
    if (this.#balance === null) throw new ValueError()
    return this.#balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
