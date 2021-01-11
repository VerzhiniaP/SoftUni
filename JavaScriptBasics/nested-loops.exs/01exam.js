function cat(arg1, arg2){

    let bedPrice = Number(arg1)
    let wc = Number(arg2)

    let catFood = 0
    catFood = wc * 1.25
    let toys = 0
    toys = catFood * 0.50
    let vet = 0
    vet = toys * 1.10
    let extra = 0
    let total =  wc + catFood + toys + vet
    extra = 0.05 * total
    let sum = (total * 12) + (extra * 12) + bedPrice
    
    console.log(`${sum.toFixed(2)} lv.`)


}
cat("12.5",
"16" )