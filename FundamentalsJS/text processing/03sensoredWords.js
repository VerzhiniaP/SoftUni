function words(sentence,word){


    let index = sentence.indexOf(word)
    
   while(index != -1){

   let first = sentence.substring(0,index)
   let second = sentence.substring(index + word.length )

   sentence = first + '*'.repeat(word.length) + second
    index = sentence.indexOf(word) 
   }
   console.log(sentence);
   
   
}
words("A small sentence with some words", "small")