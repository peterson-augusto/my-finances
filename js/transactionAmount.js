export function createTransactionAmount(amount) { // cria um elemento para o valor da transação
    const span = document.createElement('span')
    span.classList.add('transaction-amount')
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('debit')
    }

    return span

}