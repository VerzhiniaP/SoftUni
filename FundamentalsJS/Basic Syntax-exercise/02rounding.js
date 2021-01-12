function rounding(arg1, arg2){
    let num1 = Number(arg1)
    let num2 = Number(arg2)

     if(num2 > 15) {
         num2 = 15
     }
     
     num1 = num1.toFixed(num2)

    console.log(parseFloat(num1))

}
rounding(3.1415926535897932384626433832795, 2)