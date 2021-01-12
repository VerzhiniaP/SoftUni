function odd(string){

    let arr = string.split(' ')
    let obj = new Map()
     for (let line of arr) {
         line = line.toLowerCase()
      if(obj.has(line)){
          let oldCount = obj.get(line)
          obj.set(line,oldCount + 1)
      }else{
          obj.set(line,1)
      }
  }
  
  let sorted = Array.from(obj)
  let array = []
  for(let i = 0 ; i < sorted.length ; i++){
      if(sorted[i][1] % 2 !== 0){
          array.push(sorted[i][0])
      }
  }
  console.log(array.join(' '))
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')