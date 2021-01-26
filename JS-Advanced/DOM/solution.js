function solve() {
  let input = document.querySelector('#input')
  let output = document.querySelector('#output')
 
  let string = input.value
  let arr = string.split('.').filter(x => x != "" && x.match(/[^\s]+/g))
 
  let printLine = `<p>${arr[0]}`

  for(let i = 1 ; i < arr.length ; i++){
    if(i % 3 == 0){
      printLine+= `</p>\n<p>`
    }
    printLine+= `${arr[i]}.`
  }
  printLine+=`</p>`
  
output.innerHTML = printLine
}
