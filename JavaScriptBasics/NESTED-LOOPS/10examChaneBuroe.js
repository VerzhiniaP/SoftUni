function solve (arg1, arg2, arg3) {

    let bitcoinCount = Number(arg1)
    let uanCount = Number(arg2)
    let commision = Number(arg3)

    bitcoinCount *= 1168
    uanCount *= 0.15
    let  dollar  = 1.76
    let euro = 1.95

    let totalMoney = bitcoinCount + (uanCount * dollar)

    let moneyEuro = totalMoney / euro

    commision *= moneyEuro/100

    let result = moneyEuro - commision

    console.log(result.toFixed(2))


}
solve(1,
     5, 
     5)