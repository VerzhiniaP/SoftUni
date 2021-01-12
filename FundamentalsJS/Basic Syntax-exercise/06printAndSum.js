function print(arg1, arg2){

    let num1 = Number(arg1)
    let num2 = Number(arg2)

    let line = ""
    let count = 0

    for(let i = num1 ; i <= num2 ; i++) {
        count+= i
        line+= i + " "

    }
    console.log(line)

    console.log(`Sum: ${count}`)

}
print("0", "26")