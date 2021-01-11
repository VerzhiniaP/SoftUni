function vowel(text) {

    
    let sum = 0
    for(let i = 0 ; i < text.length ; i ++){
        //console.log(text[i])
        let vowel = text[i]
        switch (vowel) {
            case "a" : sum += 1;break;
            case "e" : sum += 2; break;
            case "i" : sum += 3;break;
            case "o" : sum += 4;break;
            case "u" : sum += 5; break;
            
        } }
        console.log(sum)
   


} 
vowel("hello")