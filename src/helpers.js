export const moneyFormat = (amount) => {
    return amount.toLocaleString('en-Us', {
        style: 'currency',
        currency: 'USD'
    })

}