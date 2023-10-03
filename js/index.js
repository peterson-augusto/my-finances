export let transactions = []

import { saveTransaction } from "./saveTransaction.js"
import { setup } from "./setup.js"

export async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)