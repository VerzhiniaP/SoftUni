function catShirt(arg1, arg2, arg3, arg4){
    //като умножим размера на ръкава на котката и
    // на предната част по две,
     //и към резултата прибавим още 10% за яка

     let sleeveSm = Number(arg1)
     let frontSm = Number(arg2)
     let type = arg3
     let text = arg4

     let sleeveM = sleeveSm / 100
     let frontM = frontSm / 100
    let shirtSize = ((sleeveM * 2) + (frontM * 2))
    shirtSize*= 1.10
    let price = 0

    switch (type){
        case "Linen" : price = 15 ; break;
        case "Cotton" : price = 12; break ;
        case "Denim" : price = 20; break ;
        case "Twill" : price = 16; break ;
        case "Flannel" : price = 11; break ;
    }

    let jobDone = 10
    let sum = (shirtSize * price) + jobDone
    
    if(text === "Yes"){
        sum*= 1.20
    }else{
        sum
    }

    
console.log(`The price of the shirt is: ${sum.toFixed(2)}lv."`)

}
catShirt("30", 
"50",
"Cotton",
"Yes")