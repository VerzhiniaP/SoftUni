function html(input){

    let printLine = ''
let arr = JSON.parse(input)
printLine+= '<table>'
    let keys = Object.keys(arr[0])
    printLine+='\n   <tr>'
    for(let key of keys){
  printLine += `<th>${key}</th>`
  }
    printLine+= '</tr>' + '\n'

    for(let line of arr){
        printLine+= '   <tr>'
       let entries = Object.entries(line)
         for(let entry of entries){
             printLine+= `<td>${entry[1]}</td>`
         }
         printLine+='</tr>' + '\n'
    }
    printLine+='</table>'

console.log(printLine);


}
html('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]')