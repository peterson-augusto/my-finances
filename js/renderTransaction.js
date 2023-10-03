import { createTransactionContainer } from "./transactionContainer.js"
import { createTransactionTitle } from "./transactionTitle.js"
import { createTransactionAmount } from "./transactionAmount.js"
import { createEditTransactionBtn } from "./transactionEditBtn.js"
import { createDeleteTransactionBtn } from "./transactionDeleteBtn.js"

export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}