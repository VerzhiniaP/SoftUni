function catLife(arg1, arg2){

    let type = arg1
    let sex = arg2
    let age = 0
    let isError = false

    if(sex === "m"){
        switch(type){
            case "British Shorthair" : age = 13 ; break;
            case "Siamese" : age = 15 ; break;
            case "Persian" : age = 14 ; break;
            case "Ragdoll" : age = 16 ; break;
            case "American Shorthair" : age = 12 ; break;
            case "Siberian" : age = 11 ; break;
            default : console.log(`${type} is invalid cat!`); 
            isError = true; break;
        }
    }else{
        switch(type){
            case "British Shorthair" : age = 14 ; break;
            case "Siamese" : age = 16 ; break;
            case "Persian" : age = 15 ; break;
            case "Ragdoll" : age = 17 ; break;
            case "American Shorthair" : age = 13 ; break;
            case "Siberian" : age = 12 ; break;
            default : console.log(`${type} is invalid cat!`);
            isError = true; break;
        }
    }
    let catAge = (age * 12) / 6

   if(!isError){
    console.log(`${catAge} cat months`)
   }

}
catLife("Persian", 
"m")