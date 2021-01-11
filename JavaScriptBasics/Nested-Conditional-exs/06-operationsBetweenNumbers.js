function operations(n1, n2, symbol) {

    n1= Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOrodd = "" ;

    if (symbol === "+") {
        result = n1 + n2;
        if(result % 2 === 0){
            evenOrodd = "even";
        } else {
            evenOrodd = "odd";
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrodd} `)

        
    } else if (symbol === "-") {
        result = n1 - n2; 
        if (result % 2 === 0) {
             evenOrodd = "even";
        } else {
             evenOrodd = "odd"
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrodd} `)

        
    } else if (symbol === "*") {
        result = n1 * n2; 
        if ( result % 2 === 0) {
            evenOrodd = "even"
        } else {
            evenOrodd = "odd"
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrodd} `)

    }  else if ( symbol === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
       result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`) 
    }

    } else if (symbol === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        result = n1 % n2 
         console.log(`${n1} % ${n2} = ${result}`)
    }
    }
    

    
    }
    
    

    
operations("123" , "12", "/")