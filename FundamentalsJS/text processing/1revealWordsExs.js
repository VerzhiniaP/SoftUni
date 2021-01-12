function words(strWords, text){

let arr = strWords.split(', ')
let newText = ''
for (let line of arr) {
    wordReplace = '*'.repeat(line.length)
     newText = text.replace(wordReplace,line)
     text = newText
}
console.log(text);
  

}
words('great, learning',
'softuni is ***** place for ******** new programming languages'
)