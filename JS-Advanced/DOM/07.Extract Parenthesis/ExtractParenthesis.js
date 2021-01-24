function extract(id) {

const text = document.getElementById(id).textContent
const regex = /\((.+?)\)/gm
let match = regex.exec(text)
let arr =[]
while(match != null){
    arr.push(match[1])
    match = regex.exec(text)
}
return arr.join('; ')

}