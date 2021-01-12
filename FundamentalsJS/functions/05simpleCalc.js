function calc(numOne, numTwo, operator){
    let multiply = (a,b) => a * b
    let divide = (a,b) => a / b
    let add = (a,b) => a + b
    let substract = (a,b) => a - b
    
    
    switch(operator){
        case 'multiply' : console.log(multiply(numOne,numTwo)) ; break ;
        case 'divide' : console.log(divide(numOne,numTwo)) ; break;
        case 'add' : console.log(add(numOne,numTwo)) ; break;
        case 'substract' : console.log(substract(numOne,numTwo)) ; break;
    }
}
calc(50,13, 'substract')
