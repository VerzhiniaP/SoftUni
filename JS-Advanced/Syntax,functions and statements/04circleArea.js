function circle(arg){

    let argType = typeof(arg)
    if(argType !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }else{
        let result = arg*arg*Math.PI
        console.log(result.toFixed(2))
    }
}
circle(5)