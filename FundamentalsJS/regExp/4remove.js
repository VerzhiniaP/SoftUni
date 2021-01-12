function remove(word,str){

    while(str.includes(word)){
        str = str.remove(word)
    }
    console.log(str);
}
remove('ice', 'kicegiciceeb')