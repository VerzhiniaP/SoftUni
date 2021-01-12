function hard(arr){

    let wordsArr = arr.splice(arr.length - 1,1)
   let array = wordsArr.shift()
   arr = arr.shift()
   .split(' ')

   let index = 0
   let word = array[index]
   while(array.length != 0){

    let lookFor = '_'.repeat(word.length)
    for (let line of arr) {
        if(lookFor == line){
            let index = arr.indexOf(line)
            arr.splice(index,1,word)
            
        }
    }
       word = array.shift()
   }
   console.log(arr.join(' '));
}
hard( ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]

)