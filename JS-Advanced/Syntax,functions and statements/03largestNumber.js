function number(numOne,numTwo,numThree){
    if(numOne > numTwo && numOne > numThree){
        console.log(`The largest number is ${numOne}.`)
    }else if(numTwo > numOne && numTwo > numThree){
        console.log(`The largest number is ${numTwo}.`);
    }else if(numThree > numOne && numThree > numTwo){
        console.log(`The largest number is ${numThree}.`);
    }

}
number(5, -3, 16)