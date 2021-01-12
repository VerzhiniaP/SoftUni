
function file(str){

    let arr = str.split('\\')
    let file = arr[arr.length - 1]

    let index = file.lastIndexOf('.')
      let ext = file.substring(index + 1)
      let name = file.substring(0,index)
    console.log(`File name: ${name}`)
    console.log(`File extension: ${ext}`);

}

file('C:\\Projects\\Data-Structures\\template.bak.pptx.cs')