function count(text,word){

  let arr =  text.split(' ')
  let count = 0

  for (let line of arr) {
      if(line == word){
      count++
      }
  }
  console.log(count);
 
}
count("This is a word and it also is a sentence",
"is"
)