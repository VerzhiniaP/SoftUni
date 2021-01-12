function lang(arg){
    
    if(arg == "USA" || arg == "England"){
        console.log(`English`)
    }else if(arg == "Spain" || arg == "Argentina" || arg == "Mexico"){
        console.log(`Spanish`)
    }else{
        console.log(`unknown`)
    }
    

}
lang("Germany")