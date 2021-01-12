function int(num1, num2, num3){

   num1 = Number(num1)
   num2 = Number(num2)
   num3 = Number(num3)
    let sum = num1 + num2 + num3

   
    truckedSum = Math.trunc(sum)

    if(sum == truckedSum){
        console.log(`${sum} - Integer`)
    }else{
        console.log(`${sum} - Float`)
    }

}
int("100", "200", "303")