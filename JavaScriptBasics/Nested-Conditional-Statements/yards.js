function yard(yards) {
    yards = Number(yards)

    let result
    let resultDiscount
    let yard = 7.61

    result = yard * yards 
    resultDiscount = result * 0.82
    discount = result - resultDiscount

    console.log(`The final price is: ${resultDiscount}`)
    console.log(`The discount is: ${discount} lv.`)

}
yard("150")