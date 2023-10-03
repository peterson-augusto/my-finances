import { renderTransaction } from "./renderTransaction.js"
import { updateBalance } from "./updateBalance.js"
import { fetchTransactions } from "./fetchTransactions.js"
import { transactions } from "./index.js"

export async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}