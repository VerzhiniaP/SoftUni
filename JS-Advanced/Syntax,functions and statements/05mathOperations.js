function math(numOne,numTwo,arg){
    if(arg == '+'){
        console.log(numOne+numTwo)
    }else if(arg == '-'){
        console.log(numOne-numTwo);
    }else if(arg == '*'){
        console.log(numOne*numTwo);
    }else if(arg == '/'){
        console.log(numOne/numTwo);
    }else if(arg == '%'){
        console.log(numOne%numTwo);
    }else if(arg == '**'){
        console.log(numOne**numTwo);
    }

}
math(5,6,'%')