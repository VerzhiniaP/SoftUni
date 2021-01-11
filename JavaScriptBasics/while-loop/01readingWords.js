function reading(input) {
  let i = 0
  while(true) {
    let word = input[i]
    i++
    if ( word === "Stop") {
      break;
    }
    console.log(word)
    
  }
   
    

}
reading([
  'Nakov',      'SoftUni',
  'Sofia',      'Bulgaria',
  'SomeText',   'Stop',
  'AfterStop',  'Europe',
  'HelloWorld'
])