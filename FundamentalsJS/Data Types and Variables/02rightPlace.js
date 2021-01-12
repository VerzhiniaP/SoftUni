function place(string, char , string2){

    let newWord = string.replace('_', char)

    if(newWord == string2){
        console.log(`Matched`)
    }else{
        console.log(`Not Matched`)
    }

}
place("Str_ng", "i", "String")